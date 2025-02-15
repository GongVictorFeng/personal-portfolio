import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    constructor(private titleService: Title) {
      this.titleService.setTitle('Gong(Victor) Feng - Home')
    }
}
