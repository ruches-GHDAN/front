import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field'
import { MatInput, MatInputModule } from '@angular/material/input'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker'
import { MatButton } from '@angular/material/button'
import { provideNativeDateAdapter } from '@angular/material/core'
import { ApiaryService } from '../../../../services/apiary.service'
import { SnackBarService } from '../../../../services/SnackBar-service'
import { Harvest } from '../../../../models/Apiaries.model'

@Component({
  selector: 'app-declare-harvest-dialog',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    TranslatePipe,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './declare-harvest-dialog.component.html',
  styleUrl: './declare-harvest-dialog.component.scss'
})
export class DeclareHarvestDialogComponent {
  // @Input() public apiaryId!: number
  public createHarvestForm: FormGroup

  public constructor(private formBuilder: FormBuilder,
                     private apiaryService: ApiaryService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService,
                     @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createHarvestForm = this.formBuilder.group({
      date: ['', Validators.required],
      quantity: ['', Validators.required]
    })
    console.log(data)
  }

  public addAHarvest() {
    const date = new Date(this.createHarvestForm.value.date)
    this.createHarvestForm.value.date = date.toISOString().split('T')[ 0 ]
    const harvestToDeclare: Harvest = {
      date: this.createHarvestForm.value.date,
      quantity: this.createHarvestForm.value.quantity,
      apiary_id: this.data.apiaryId
    }
    this.apiaryService.addHarvest(harvestToDeclare).subscribe({
      next: () => {
        this.snackBarService.openInfoSnackBar(this.translateService.instant('snackBar.success.declareHarvest'))
      },
      error: error => {
        this.snackBarService.openErrorSnackBar(this.translateService.instant('snackBar.error.declareHarvest'))
        console.error(error)
      }
    })
  }
}
