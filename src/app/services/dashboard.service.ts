import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../Constants';
import { ApiariesHistory } from '../models/Apiaries.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl: string = environment.apiUrl + '/api/dashboard'
  private getUserHistoryUrl: string = environment.apiUrl + '/api/history/getHistoryByUser'

  constructor(private http: HttpClient,
              private readonly constants: Constants) {}

  public getData(userId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem(this.constants.TOKEN_KEY)
    });
    return this.http.get<any>(`${this.baseUrl}/globalDetail/${userId}`, { headers: headers })
  }

  public getUserHistory(): Observable<ApiariesHistory[]> {
    return this.http.post<ApiariesHistory[]>(`${this.getUserHistoryUrl}`, null)
  }
}
