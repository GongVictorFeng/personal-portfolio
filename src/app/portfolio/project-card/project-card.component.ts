import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { Project } from '../../models/Project';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

    @Input() project: Project = {} as Project;

    constructor(private dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(ProjectDialogComponent, {
          data: this.project,
          width: 'auto',
          maxHeight: '90vh',
          maxWidth: '50vw'
        })
      }
}
