import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private apiUrl = 'https://api.spacexdata.com/v4/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }
  getMissionById(id: string): Observable<Mission> {
  return this.http.get<Mission>(`https://api.spacexdata.com/v4/launches/${id}`);
}
}