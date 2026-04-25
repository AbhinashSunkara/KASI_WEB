// core/services/http.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  async postAsync(baseUrl: string, endpoint: string, body: Object = {}, params: HttpParams = new HttpParams()): Promise<any> {
    return await firstValueFrom(
      this.http.post(`${baseUrl}/${endpoint}`, body, { params })
    );
  }

  async putAsync(baseUrl: string, endpoint: string, body: Object = {}, params: HttpParams = new HttpParams()): Promise<any> {
    return await firstValueFrom(
      this.http.put(`${baseUrl}/${endpoint}`, body, { params })
    );
  }
  async deleteAsync(baseUrl: string, endpoint: string, params: HttpParams = new HttpParams()): Promise<any> {
    return await firstValueFrom(
      this.http.delete(`${baseUrl}/${endpoint}`, { params })
    );
  }

  async getAsync<T>(
  baseUrl: string,
  endpoint: string,
  query?: any
): Promise<T> {

  let params = new HttpParams();

  if (query) {
    Object.keys(query).forEach(key => {
      if (query[key] !== undefined && query[key] !== null) {
        params = params.set(key, query[key]);
      }
    });
  }

  return await firstValueFrom(
    this.http.get<T>(`${baseUrl}/${endpoint}`, { params })
  );
}

  async patchAsync(baseUrl: string, endpoint: string, body: Object = {}, params: HttpParams = new HttpParams()): Promise<any> 
  {
    return await firstValueFrom(
      this.http.patch(`${baseUrl}/${endpoint}`, body, { params })
    );
  }

  post<T>(baseUrl: string, endpoint: string, body: Object = {}, params: HttpParams = new HttpParams(), responseType: 'json' | 'text' = 'json'): Observable<T> {
  return this.http.post<T>(`${baseUrl}/${endpoint}`, body, 
    {
      params,
      responseType: responseType as any
    }
  );
}

  get<T>(baseUrl: string, endpoint: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${baseUrl}/${endpoint}`, {params});
  }
}
