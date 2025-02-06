export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  token_type: string
  user: {
    id: number
    firstName: string
    lastName: string
    email: string
  }
}

export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface CurrentUser {
  id: number
  firstName: string
  lastName: string
  email: string
}
