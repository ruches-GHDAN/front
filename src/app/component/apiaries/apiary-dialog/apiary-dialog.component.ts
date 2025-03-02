import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButton } from '@angular/material/button'
import { MatInput } from '@angular/material/input'
import { ApiaryService } from '../../../services/apiary.service'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-apiary-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    FormsModule,
    MatButton,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDialogClose,
    TranslatePipe,
  ],
  templateUrl: './apiary-dialog.component.html',
  styleUrl: './apiary-dialog.component.scss'
})
export class ApiaryDialogComponent {
  public dialogRef = inject(MatDialog)
  public addApiaryForm: FormGroup

  public constructor(private formBuilder: FormBuilder,
                     private apiaryService: ApiaryService) {
    this.addApiaryForm = this.formBuilder.group({
      name: ['', Validators.required],
      latitude: [0, Validators.required],
      longitude: [0, Validators.required],
      temperature: [0, Validators.required]
    })
  }

  public addApiary(): void {
    this.apiaryService.addApiary(this.addApiaryForm.value).subscribe({
      next: () => {
        console.log('Apiary added successfully')
      },
      error: (error) => {
        console.error('Error adding apiary', error)
      }
    })
  }
}
