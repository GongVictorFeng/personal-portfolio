import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-resume',
  imports: [
    MatButtonModule,
    CdkAccordionModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
    constructor(private titleService: Title, private renderer: Renderer2) {
      this.titleService.setTitle('Gong(Victor) Feng - Resume')
    }

    onDownload() {
      const link = this.renderer.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', '../../assets/Gong_resume_2025.pdf');
      link.setAttribute('download', 'Gong_resume_2025.pdf');
      link.click();
      link.remove();
    }
}
