import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../Constants';
import { Apiary, ApiaryDetails } from '../models/Apiary.model'
import { Observable } from 'rxjs'
import { ApiaryHistory, HivesLocation } from '../models/Apiaries.model'

@Injectable({
  providedIn: 'root'
})
export class ApiaryService {
  private baseUrl: string = environment.apiUrl + '/api/apiary'
  private getUserApiariesUrl: string = environment.apiUrl + '/api/user/apiaries'
  private getApiaryHistoryUrl :string = environment.apiUrl + '/api/history/getHistoryByApiary'

  constructor(private http: HttpClient,
              private readonly constants: Constants) {}

  public getUserApiariesLocations(userId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem(this.constants.TOKEN_KEY)
    });
    return this.http.get<any>(`${this.baseUrl}/getAllLocation/${userId}`, { headers: headers })
  }

  public addApiary(request: Apiary): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/create`, request)
  }

  public getAllApiaries(): Observable<Apiary[]> {
    return this.http.post<Apiary[]>(`${this.getUserApiariesUrl}`, null)
  }

  public getApiaryById(apiaryId: string): Observable<ApiaryDetails> {
    return this.http.get<ApiaryDetails>(`${this.baseUrl}/about/${apiaryId}`)
  }

  public getApiaryHistory(apiaryId: string): Observable<ApiaryHistory[]> {
    return this.http.post<ApiaryHistory[]>(`${this.getApiaryHistoryUrl}/${apiaryId}`, null)
  }

  public getHivesLocation(apiaryId: string): Observable<HivesLocation[]> {
    return this.http.get<HivesLocation[]>(`${this.baseUrl}/locateHives/${apiaryId}`)
  }
}
