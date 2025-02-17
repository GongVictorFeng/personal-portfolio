import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from './project-card/project-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCardComponent,
    MatGridListModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: "Sample Angular Project",
    summary: "Test description",
    description: "",
    projectLink: "",
    url: "",
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []
  }
  
    constructor(private titleService: Title) {
      this.titleService.setTitle('Gong(Victor) Feng - Portfolio')
    }
}
