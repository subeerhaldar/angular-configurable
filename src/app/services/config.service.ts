import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageConfig } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<PageConfig> {
    return this.http.get<PageConfig>('assets/config/sample-config.json');
  }
}