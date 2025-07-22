import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './demo.html',
  styleUrl: './demo.scss'
})
export class Demo {

}
