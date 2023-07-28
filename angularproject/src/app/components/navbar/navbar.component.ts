import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  doSearch(value: string) {
    // console.log(value);
    this.router.navigateByUrl(`/search/${value}`);
  }
}
