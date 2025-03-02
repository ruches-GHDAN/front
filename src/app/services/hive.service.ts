import { Injectable } from '@angular/core'
import { environment } from '../environments/environments'
import { HttpClient } from '@angular/common/http'
import { Constants } from '../Constants'
import { Observable } from 'rxjs'
import { AllHives, Hive, HiveResponse } from '../models/Hives.model'

@Injectable({
  providedIn: 'root'
})
export class HiveService {
  private baseUrl: string = environment.apiUrl + '/api/hive'
  private getAllHivesUrl: string = environment.apiUrl + '/api/user/hives'

  constructor(private http: HttpClient) {}

  public getHiveById(hiveId: number): Observable<HiveResponse> {
    return this.http.get<HiveResponse>(`${this.baseUrl}/about/${hiveId}`)
  }

  public getAllHives(): Observable<AllHives[]> {
    return this.http.post<AllHives[]>(this.getAllHivesUrl, null)
  }
}
