import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';
  show_navbar = true;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    this.show_navbar = this.prevScrollPos > currentScrollPos;
    this.prevScrollPos = currentScrollPos;
  }
}
