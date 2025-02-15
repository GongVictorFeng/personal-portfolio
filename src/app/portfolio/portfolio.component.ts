import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  
    constructor(private titleService: Title) {
      this.titleService.setTitle('Gong(Victor) Feng - Portfolio')
    }
}
