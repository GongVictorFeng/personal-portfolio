import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Title } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-contact',
  imports: [
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = "gn927843@dal.ca"
    constructor(private titleService: Title) {

      this.titleService.setTitle('Gong(Victor) Feng - Contact');
    }
}
