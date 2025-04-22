import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  constructor(private http: HttpClient) {}

  getCertificates(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/certificates.json');
  }
}


