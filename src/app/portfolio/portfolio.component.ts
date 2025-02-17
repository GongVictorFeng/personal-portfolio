import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from './project-card/project-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCardComponent,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  
  constructor(private titleService: Title, private projectService: ProjectService) {
      this.titleService.setTitle('Gong(Victor) Feng - Portfolio')
    }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
