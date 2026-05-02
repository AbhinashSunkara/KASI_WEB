import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignApiService } from '../../../services/campaign-api.service';
import { DocumentApiService } from '../../../services/document-api.service';
import { CampaignStatus } from '../../../../models/Enums';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-campaign-view',
  standalone: false,
  templateUrl: './campaign-view.html',
  styleUrl: './campaign-view.css',
})
export class CampaignView implements OnInit {

  data: any;
  loading = true;
  selectedDoc: any = null;
  pdfViewerKey = 0;
  constructor(
    private route: ActivatedRoute,
    private api: CampaignApiService,
    private documentApi: DocumentApiService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.load(id!);
  }

  async load(id: string) {
    this.loading = false;

    try {
      this.data = await this.api.getById(id);
      const updatedDocs: any[] = []
for (const doc of this.data.documents) {
  const secureUrl = await this.documentApi.getSecureFile(doc.fileUrl);
  updatedDocs.push({ ...doc, secureUrl });
}
      this.loading = false;

      this.data.documents = this.data.documents.map((doc: any) => ({
  ...doc,
  safeUrl: doc.fileType.includes('pdf')
    ? this.sanitizer.bypassSecurityTrustResourceUrl(doc.fileUrl)
    : null
}));


if (this.data.documents.length > 0) {
  this.selectedDoc = this.data.documents[0];
  this.cdr.detectChanges(); // 🔥 FIX
}

    } catch (e) {
      console.error(e);
      this.toastr.error('Failed to load campaign');
    } finally {
      this.loading = false;
    }
  }

   selectDoc(doc: any) {
  this.selectedDoc = doc; // 🔥 DO NOT spread
  this.pdfViewerKey++;
}

  async approve() {
    await this.api.updateStatus(
      this.data.campaign.campaignId,
      { status: CampaignStatus.Active }
    );
    this.toastr.success('Campaign approved successfully!');
    await this.load(this.data.campaign.campaignId);
  }

  async reject() {
    await this.api.updateStatus(
      this.data.campaign.campaignId,
      { status: CampaignStatus.Cancelled }
    );
    this.toastr.success('Campaign rejected successfully!');
    await this.load(this.data.campaign.campaignId);
  }

  async complete() {
    const id = this.data.campaign.campaignId;

    try {
      await this.api.updateStatus(id, { status: CampaignStatus.Completed });
      this.toastr.success('Campaign marked as completed!');
      await this.load(id);
    } catch (e) {
      console.error(e);
      this.toastr.error('Failed to complete campaign');
    }
  }

  async reopen() {
    const id = this.data.campaign.campaignId;

    try {
      await this.api.updateStatus(id, { status: CampaignStatus.Active });
      this.toastr.success('Campaign reopened successfully!');
      await this.load(id);
    } catch (e) {
      console.error(e);
      this.toastr.error('Failed to reopen campaign');
    }
  }

  getAvailableActions(status: CampaignStatus): string[] {
    switch (status) {
      case CampaignStatus.Pending: return ['approve', 'reject'];
      case CampaignStatus.Active: return ['complete', 'cancel'];
      case CampaignStatus.Completed: return ['reopen'];
      case CampaignStatus.Cancelled: return ['reopen'];
      default: return [];
    }
  }

  getStatus(status: number): string {
    switch (status) {
      case 1: return 'Pending';
      case 2: return 'Active';
      case 3: return 'Completed';
      case 4: return 'Cancelled';
      default: return 'Unknown';
    }
  }
}