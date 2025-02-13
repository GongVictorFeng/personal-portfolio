import { Component, ViewEncapsulation } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-header',
  imports: [MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  name: string = "Gong (Victor) Feng";
  role: string = "Software Developer";
}
