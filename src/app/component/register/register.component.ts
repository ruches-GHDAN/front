import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious } from '@angular/material/stepper'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { Router, RouterLink } from '@angular/router'
import { LoaderComponent } from '../loader/loader.component'
import { LoginResponse, RegisterRequest } from '../../models/Authentication.model'
import { AuthenticationService } from '../../services/authentication.service'
import { Constants } from '../../Constants'
import { SnackBarService } from '../../services/SnackBar-service'

@Component({
  selector: 'app-register',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatStepperNext,
    MatStepperPrevious,
    TranslatePipe,
    RouterLink,
    LoaderComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public firstFormGroup: FormGroup
  public secondFormGroup: FormGroup
  public isLoading: boolean = false
  private request: RegisterRequest | undefined

  public constructor(private _formBuilder: FormBuilder,
                     private readonly authenticationService: AuthenticationService,
                     private readonly router: Router,
                     private readonly snackBarService: SnackBarService,
                     private readonly translateService: TranslateService) {
   this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
   })

   this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
   })
  }

  public register() {
    this.isLoading = true
    this.request = {
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      email: this.secondFormGroup.value.email,
      password: this.secondFormGroup.value.password
    }

    this.authenticationService.register(this.request).subscribe({
      next: (response: LoginResponse) => {
        setTimeout(() => {
          this.authenticationService.setCurrentUser(response)
          this.router.navigate(['/'])
          this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.register'))
          this.isLoading = false
        }, 1000)
      },
      error: (error: any) => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.register'))
        this.isLoading = false
        console.error('Error:', error)
      }
    })
  }
}
