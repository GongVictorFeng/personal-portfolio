import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
    constructor(private titleService: Title) {
      this.titleService.setTitle('Gong(Victor) Feng - Resume')
    }
}
