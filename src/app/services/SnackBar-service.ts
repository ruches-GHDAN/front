import { inject, Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})
export class SnackBarService{
  private _snackBar = inject(MatSnackBar)
  public durationInSeconds = 5

  public constructor(private readonly translateService: TranslateService) {
  }

  public openInfoSnackBar(message: string) {
    this._snackBar.open(message, this.translateService.instant('snackBar.action'), {
      duration: this.durationInSeconds * 1000,
      panelClass: ['snackBar-info']
    })
  }

  public openErrorSnackBar(message: string) {
    this._snackBar.open(message, this.translateService.instant('snackBar.action'), {
      duration: this.durationInSeconds * 1000,
      panelClass: ['snackBar-error']
    })
  }
}
