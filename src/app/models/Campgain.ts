export interface CreateCampaignRequestDto {
  title: string;
  story: string;
  goalAmount: number;

  patient: PatientDto;
  medical: MedicalDto;
  documents: DocumentDto[];
}

export interface PatientDto {
  name: string;
  age: number;
  gender: string;
  phone: string;
  city: string;
}

export interface MedicalDto {
  condition: string;
  hospital: string;
  doctor?: string;
  estimatedCost: number;
  description: string;
}

export interface DocumentDto {
  fileName: string;
  fileUrl: string;
  fileType: string;
}

export interface CampaignQueryParamsDto {
  page?: number;
  pageSize?: number;
  search?: string;
  city?: string;
  status?: string;
  sortBy?: string;
}

export interface UpdateCampaignRequest {
  title?: string;
  story?: string;
  goalAmount?: number;
}

export interface UpdateCampaignStatusRequest {
  status: string; // "Active" | "Rejected" | "Pending"
}

export interface CampaignListItemDto {
  campaignId: string;
  title: string;
  goalAmount: number;
  totalRaised: number;
  city: string;
  status: string;
  createdAt: string;
}

export interface CampaignDetailsDto {
  campaignId: string;
  title: string;
  story: string;
  goalAmount: number;
  totalRaised: number;
  status: string;

  patient: PatientDto;
  medical: MedicalDto;
  documents: DocumentDto[];
}

export interface CampaignStatsDto {
  totalRaised: number;
  donorCount: number;
  goalAmount: number;
  percentageCompleted: number;
}