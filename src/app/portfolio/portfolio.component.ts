import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from './project-card/project-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Tag } from '../models/Tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCardComponent,
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;
  // Define filters object
  filters: { [key: string]: boolean } = {};
  languages = [
    { key: 'java', label: 'Java' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'csharp', label: 'C#' },
    { key: 'python', label: 'Python' },
    { key: 'javascript', label: 'JavaScript' }
  ];

  // Define frameworks dynamically
  frameworks = [
    { key: 'angular', label: 'Angular' },
    { key: 'react', label: 'React' },
    { key: 'spring', label: 'Spring Boot' },
    { key: 'dotnet', label: '.NET' }
  ];
  
  constructor(private titleService: Title, private projectService: ProjectService) {
      this.titleService.setTitle('Gong(Victor) Feng - Portfolio');

      [...this.languages, ...this.frameworks].forEach(item => {
        this.filters[item.key] = false;
      });
    }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onFilter() {
    const filterTag: Tag[] = [];
    
    if (this.filters['typescript']) {
      filterTag.push(Tag.TYPESCRIPT)
    }
    this.projects = this.projectService.getProjectsByFilter(filterTag)
  }
}
