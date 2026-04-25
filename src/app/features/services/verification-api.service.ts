import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/apiservice';
import { environment } from '../../../environments/environment';

export interface RejectCampaignRequestDto {
  reason: string;
}

@Injectable({ providedIn: 'root' })
export class VerificationApiService {
  private baseUrl = environment.kasiApiUrl;

  constructor(private http: ApiService) {}

  async getPending(): Promise<any> {
    return await this.http.getAsync(this.baseUrl, 'verification/pending');
  }

  async getById(campaignId: string): Promise<any> {
    return await this.http.getAsync(this.baseUrl, `verification/${campaignId}`);
  }

  async approve(campaignId: string): Promise<any> {
    return await this.http.postAsync(
      this.baseUrl,
      `verification/${campaignId}/approve`,
      {}
    );
  }

  async reject(campaignId: string, reason: string): Promise<any> {
    const body: RejectCampaignRequestDto = { reason };

    return await this.http.postAsync(
      this.baseUrl,
      `verification/${campaignId}/reject`,
      body
    );
  }
}