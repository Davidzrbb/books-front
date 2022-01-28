import { Component } from '@angular/core';
import { routes as navLinks } from '../config/nav-links'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navLinks = navLinks;
}
