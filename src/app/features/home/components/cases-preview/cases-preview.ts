import { Component, OnInit } from '@angular/core';
import { CampaignApiService } from '../../../services/campaign-api.service';

@Component({
  selector: 'app-cases-preview',
  standalone: false,
  templateUrl: './cases-preview.html',
  styleUrl: './cases-preview.css',
})
export class CasesPreview implements OnInit {

  cases: any[] = [];
  loading = true;

  constructor(private api: CampaignApiService) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    try {
      const res = await this.api.getAll({
        page: 1,
        pageSize: 6,
        status: 2 // Active
      });

      this.cases = res?.items || [];

      console.log('Loaded cases:', this.cases);

    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  getProgress(raised: number, goal: number): number {
    return Math.min((raised / goal) * 100, 100);
  }

  getImage(url: string | null): string {
    return url || 'https://images.unsplash.com/photo-1579154204601-01588f351e67';
  }
}