import { Component } from '@angular/core'
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButton } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router'
import { LoaderComponent } from '../loader/loader.component'
import { AuthenticationService } from '../../services/authentication.service'
import { LoginResponse } from '../../models/Authentication.model'
import { Constants } from '../../Constants'
import { SnackBarService } from '../../services/SnackBar-service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TranslatePipe,
    TranslateModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton, RouterLink, LoaderComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public value: string = "caca"
  public loginForm: FormGroup
  public isLoading: boolean = false

  public constructor(public formBuilder: FormBuilder,
                     public router: Router,
                     private readonly authenticationService: AuthenticationService,
                     private readonly snackBarService: SnackBarService,
                     private readonly translateService: TranslateService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  public login() {
    this.isLoading = true
    this.authenticationService.login(this.loginForm.value).subscribe({
      next: (response: LoginResponse) => {
        setTimeout(() => {
          this.authenticationService.setCurrentUser(response)
          this.router.navigate(['/'])
          this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.login'))
          this.isLoading = false
        }, 1000)
      },
      error: (error: any) => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.login'))
        this.isLoading = false
        console.error('Error:', error)
      }
    })
  }
}
