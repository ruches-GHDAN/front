import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  public loadingText: string = ''

  constructor(private translate: TranslateService) {
    this.translate.get('loader.title').subscribe((result) => {
      this.loadingText = result
    })
  }
}
