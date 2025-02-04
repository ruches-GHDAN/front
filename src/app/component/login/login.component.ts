import { Component } from '@angular/core'
import { TranslateModule, TranslatePipe } from '@ngx-translate/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButton } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    TranslatePipe,
    TranslateModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton, RouterLink,
  ],
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public value: string = "caca"
  public loginForm: FormGroup

  public constructor(public formBuilder: FormBuilder,
                     public router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  public login() {
    // TODO: Implement login
  }
}
