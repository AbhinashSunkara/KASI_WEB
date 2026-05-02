import { Component, OnInit } from '@angular/core';
import { CampaignApiService } from '../../../services/campaign-api.service';
import { Router } from '@angular/router';
import { CampaignStatus } from '../../../../models/Enums';

@Component({
  selector: 'app-campaign-table',
  standalone: false,
  templateUrl: './campaign-table.html',
  styleUrl: './campaign-table.css',
})
export class CampaignTable implements OnInit {

  campaigns: any[] = [];
  loading = false;
  currentStatus: CampaignStatus = CampaignStatus.Pending;
  actionLoading: { [key: string]: boolean } = {};

  constructor(
    private api: CampaignApiService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    this.loading = true;

    try {
      const res = await this.api.getAll({
        page: 1,
        pageSize: 10,
        status: this.currentStatus
      });

      this.campaigns = res?.items || [];

    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  view(id: string) {
    this.router.navigate(['/admin/campaign', id]);
  }

  async changeTab(status: CampaignStatus) {
  if (this.currentStatus === status) return;

  this.currentStatus = status;
  await this.load();
}

  async approve(id: string) {
    this.actionLoading[id] = true;

    try {
      await this.api.updateStatus(id, { status: CampaignStatus.Active });

      // 🔥 Instant UI update (remove from list)
      this.campaigns = this.campaigns.filter(c => c.campaignId !== id);

      // optional: background refresh
      this.load();

    } catch (err) {
      console.error(err);
    } finally {
      this.actionLoading[id] = false;
    }
  }

  async reject(id: string) {
    this.actionLoading[id] = true;

    try {
      await this.api.updateStatus(id, { status: CampaignStatus.Cancelled });

      // 🔥 Instant UI update
      this.campaigns = this.campaigns.filter(c => c.campaignId !== id);

      // optional refresh
      this.load();

    } catch (err) {
      console.error(err);
    } finally {
      this.actionLoading[id] = false;
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