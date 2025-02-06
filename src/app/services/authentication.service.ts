import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environments'
import { CurrentUser, LoginRequest, LoginResponse, RegisterRequest } from '../models/Authentication.model'
import { Observable } from 'rxjs'
import { Constants } from '../Constants'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = environment.apiUrl + '/api'
  constructor(private http: HttpClient,
              private readonly constants: Constants) {}

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginRequest)
  }

  public register(registerRequest: RegisterRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/register`, registerRequest)
  }

  public setCurrentUser(response: LoginResponse): void {
    localStorage.setItem(this.constants.CURRENT_USER_KEY, JSON.stringify(response.user))
    localStorage.setItem(this.constants.TOKEN_KEY, response.access_token)
  }

  public logout(): void {
    localStorage.removeItem(this.constants.TOKEN_KEY)
    localStorage.removeItem(this.constants.CURRENT_USER_KEY)
  }

  public getCurrentUser(): CurrentUser | null {
    return JSON.parse(localStorage.getItem(this.constants.CURRENT_USER_KEY)!)
  }
}
