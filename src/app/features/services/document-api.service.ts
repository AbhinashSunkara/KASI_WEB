import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface FileUploadResponse {
  fileName: string;
  fileUrl: string;
  fileType: string;
}

@Injectable({ providedIn: 'root' })
export class DocumentApiService {
  private baseUrl = environment.kasiApiUrl;

  constructor(private http: HttpClient) {}

  async upload(file: File): Promise<FileUploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return await firstValueFrom(
      this.http.post<FileUploadResponse>(
        `${this.baseUrl}/documents/upload`,
        formData
      )
    );
  }

  async delete(fileUrl: string): Promise<void> {
    const params = new HttpParams().set('fileUrl', fileUrl);

    await firstValueFrom(
      this.http.delete(`${this.baseUrl}/documents`, { params })
    );
  }

   async getSecureFile(fileUrl: string): Promise<string> {
  const params = new HttpParams().set('fileUrl', fileUrl);

  return await firstValueFrom(
    this.http.get<string>(`${this.baseUrl}/documents`, { params })
  );
}
}