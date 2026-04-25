import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/apiservice';
import { environment } from '../../../environments/environment';
import { CampaignQueryParamsDto, CreateCampaignRequestDto, UpdateCampaignRequest, UpdateCampaignStatusRequest } from '../../models/Campgain';

@Injectable({ providedIn: 'root' })
export class CampaignApiService {
  private baseUrl = environment.kasiApiUrl;

  constructor(private http: ApiService) {}

  async create(data: CreateCampaignRequestDto): Promise<any> {
    return await this.http.postAsync(this.baseUrl, 'campaign', data);
  }

  async getAll(query: CampaignQueryParamsDto): Promise<any> {
    return await this.http.getAsync(this.baseUrl, 'campaign', query);
  }

  async getById(id: string): Promise<any> {
    return await this.http.getAsync(this.baseUrl, `campaign/${id}`);
  }

  async getBySlug(slug: string): Promise<any> {
    return await this.http.getAsync(this.baseUrl, `campaign/slug/${slug}`);
  }

  async getMyCampaigns(): Promise<any> {
    return await this.http.getAsync(this.baseUrl, 'campaign/my');
  }

  async update(id: string, data: UpdateCampaignRequest): Promise<void> {
    return await this.http.putAsync(this.baseUrl, `campaign/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    return await this.http.deleteAsync(this.baseUrl, `campaign/${id}`);
  }

  async getFeatured(): Promise<any> {
    return await this.http.getAsync(this.baseUrl, 'campaign/featured');
  }

  async getTrending(): Promise<any> {
    return await this.http.getAsync(this.baseUrl, 'campaign/trending');
  }

  async getStats(id: string): Promise<any> {
    return await this.http.getAsync(this.baseUrl, `campaign/${id}/stats`);
  }

  async updateStatus(id: string, data: UpdateCampaignStatusRequest): Promise<void> {
    return await this.http.patchAsync(this.baseUrl, `campaign/${id}/status`, data);
  }

  async search(query: string): Promise<any> {
    return await this.http.getAsync(this.baseUrl, 'campaign/search', { q: query });
  }
}