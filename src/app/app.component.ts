import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  imports: [
    MatSlideToggleModule,
    HeaderComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-portfolio';
}
