import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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

  cols = 2;
  rowHeight = "65vh";

  constructor(private titleService: Title, private projectService: ProjectService, private responsive: BreakpointObserver) {
    this.titleService.setTitle('Gong(Victor) Feng - Home')
  }
  ngOnInit(): void {
    this.featureProject = this.projectService.getProjectById(0);

    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(
      result => {
        this.cols = 2;
        this.rowHeight = "65vh";

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait] || breakpoints[Breakpoints.TabletLandscape]) {
            this.cols = 1;
            this.rowHeight = "65vh";
        }
        else if (breakpoints[Breakpoints.HandsetPortrait] || breakpoints[Breakpoints.HandsetLandscape]) {
            this.cols = 1;
            this.rowHeight = "100vh";
        }
      }
    )
  }
}
