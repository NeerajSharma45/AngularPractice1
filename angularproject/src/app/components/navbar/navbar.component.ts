import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartIcon = faCartShopping;
  searchIcon = faMagnifyingGlass;

  constructor() {}

  doSearch(value: string) {
    console.log(value);
  }
}
