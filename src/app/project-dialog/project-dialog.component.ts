import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-dialog',
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public project: Project){ }
}
