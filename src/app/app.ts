import { Component, signal } from '@angular/core';
import { Banner } from './banner/banner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projet-Technobel');
}
