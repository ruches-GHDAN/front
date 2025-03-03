import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from './authentication.service'

export const AuthGuard = () => {
  const router = inject(Router)
  const authenticationService = inject(AuthenticationService)
  return authenticationService.isAuthenticated() ? true : router.navigate(['/login'])
}
