import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { Project } from '../models/Project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Tag } from '../models/Tag';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  isFiltered: boolean = false;

  cols = 3;
  rowHeight ="200px"

  // Define filters object
  filters: { [key: string]: boolean } = {};
  languages = [
    Tag.JAVA,
    Tag.TYPESCRIPT,
    Tag.CSHARP,
    Tag.PYTHON,
    Tag.JAVASCRIPT,
    Tag.KOTLIN
  ];

  // Define frameworks dynamically
  frameworks = [
    Tag.ANGULAR,
    Tag.REACT,
    Tag.ASPNET,
    Tag.NODEJS,
    Tag.SPRINGBOOT
  ];
  
  constructor(private titleService: Title, private projectService: ProjectService, private responsive: BreakpointObserver) {
      this.titleService.setTitle('Gong(Victor) Feng - Portfolio');

      [...this.languages, ...this.frameworks].forEach(item => {
        this.filters[item.key] = false;
      });
    }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();

    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(
      result => {
        this.cols = 3;
        this.rowHeight = "200px";

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait]) {
            this.cols = 2;
        }
        else if (breakpoints[Breakpoints.HandsetPortrait]) {
            this.cols = 1;
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]) {
            this.cols = 1;
        }
        else if (breakpoints[Breakpoints.TabletLandscape]) {
            this.cols = 2;
        }
      }
    );
  }

  onFilter() {
    const filterTags: Tag[] = [];

    [...this.languages, ...this.frameworks].forEach(
      (tag) => {
        if (this.filters[tag.key]) {
          filterTags.push(tag);
        }
      }
    )

    this.isFiltered = filterTags.length === 0 ? false : true;
    this.projects = this.projectService.getProjectsByFilter(filterTags)
  }

  onReset() {
    [...this.languages, ...this.frameworks].forEach(item => {
      this.filters[item.key] = false;
    });

    this.projects = this.projectService.getProjects();
    this.isFiltered = false;
  }
}
