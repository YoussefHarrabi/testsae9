import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampingService {
  private apiUrl = 'http://localhost:3000/campings'; // L'URL du json-server

  constructor(private http: HttpClient) {}

  // Ajouter un camping
  addCamping(camping: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, camping);
  }
  
  getCampings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteCamping(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getCampingById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
