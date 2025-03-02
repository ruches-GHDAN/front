import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButton } from '@angular/material/button'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatOption, MatSelect } from '@angular/material/select'
import { Apiary } from '../../../models/Apiary.model'
import { ApiaryService } from '../../../services/apiary.service'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'
import { HiveService } from '../../../services/hive.service'
import { SnackBarService } from '../../../services/SnackBar-service'

@Component({
  selector: 'app-hive-dialog',
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    TranslatePipe,
  ],
  templateUrl: './hive-dialog.component.html',
  styleUrl: './hive-dialog.component.scss'
})
export class HiveDialogComponent implements OnInit {
  public dialogRef = inject(MatDialog)
  public addHiveForm: FormGroup
  public apiariesAvailable: Apiary[] = []

  public constructor(private formBuilder: FormBuilder,
                     private apiaryService: ApiaryService,
                     private hiveService: HiveService,
                     private snackBarService: SnackBarService,
                     private translateService: TranslateService) {
    this.addHiveForm = this.formBuilder.group({
      registration: [0, Validators.required],
      status: ['', Validators.required],
      size: [10, Validators.required],
      race: ['', Validators.required],
      queenYear: [2021, Validators.required],
      temperature: [0, Validators.required],
      latitude: [0, Validators.required],
      longitude: [0, Validators.required],
      apiary_id: [0, Validators.required]
    })
  }

  public ngOnInit() {
    this.apiaryService.getAllApiaries().subscribe({
      next: (apiaries) => {
        this.apiariesAvailable = apiaries
      },
      error: (error) => {
        this.snackBarService.openErrorSnackBar('Error getting apiaries')
        console.error('Error getting apiaries', error)
      }
    })
  }

  public addHive() {
    this.hiveService.addHive(this.addHiveForm.value).subscribe({
      next: () => {
        this.snackBarService.openInfoSnackBar('Hive added')
      },
      error: (error) => {
        this.snackBarService.openErrorSnackBar('Error adding hive')
        console.error('Error adding hive', error)
      }
    })
  }
}
