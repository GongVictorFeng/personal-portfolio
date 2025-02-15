import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    constructor(private titleService: Title) {
      this.titleService.setTitle('Gong(Victor) Feng - Contact')
    }
}
