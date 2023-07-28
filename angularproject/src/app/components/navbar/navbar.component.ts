import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartIcon = faCartShopping;
  searchIcon = faMagnifyingGlass;

  constructor(private router: Router) {}
  show_navbar = true;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    this.show_navbar = this.prevScrollPos > currentScrollPos;
    this.prevScrollPos = currentScrollPos;
  }

  doSearch(value: string) {
    this.router.navigateByUrl(`/search/${value}`);
  }
}
