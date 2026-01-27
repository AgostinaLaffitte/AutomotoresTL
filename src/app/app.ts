import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = 'AutomotoresTL';
  currentYear = new Date().getFullYear();
}
