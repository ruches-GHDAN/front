import { Component } from '@angular/core'
import { TranslateModule, TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    TranslatePipe,
    TranslateModule
  ],
  styleUrl: './login.component.scss',
})
export class LoginComponent {
}
