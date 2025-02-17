import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  imports: [
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  featureProject = {} as Project;

    constructor(private titleService: Title, private projectService: ProjectService) {
      this.titleService.setTitle('Gong(Victor) Feng - Home')
    }
  ngOnInit(): void {
    this.featureProject = this.projectService.getProjectById(0);
  }
}
