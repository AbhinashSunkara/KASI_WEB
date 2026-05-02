import { Component, OnInit } from '@angular/core';
import { CampaignListItemDto, CampaignQueryParamsDto } from '../../../models/Campgain';
import { CampaignApiService } from '../../services/campaign-api.service';
import { CampaignStatus } from '../../../models/Enums';

@Component({
  selector: 'app-cases-page',
  standalone: false,
  templateUrl: './cases-page.html',
  styleUrl: './cases-page.css',
})
export class CasesPage implements OnInit {

  cases: any[] = [];
  loading = false;
  error = false;

  constructor(private campaignApi: CampaignApiService) {}

  async ngOnInit() {
    await this.loadCases();
  }

  async loadCases() {
    this.loading = true;
    this.error = false;

    try {
      const query: CampaignQueryParamsDto = {
        page: 1,
        pageSize: 10,
        status: CampaignStatus.Active
      };

      const res = await this.campaignApi.getAll(query);

      const items = res?.data || res?.items || res || [];

      this.cases = items;

    } catch (err) {
      console.error('Failed to load cases', err);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}