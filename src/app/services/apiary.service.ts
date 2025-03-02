import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../Constants';

@Injectable({
  providedIn: 'root'
})
export class ApiaryService {
  private baseUrl: string = environment.apiUrl + '/api/apiary'

  constructor(private http: HttpClient,
              private readonly constants: Constants) {}

  public getUserApiariesLocations(userId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem(this.constants.TOKEN_KEY)
    });
    return this.http.get<any>(`${this.baseUrl}/getAllLocation/${userId}`, { headers: headers })
  }
}
