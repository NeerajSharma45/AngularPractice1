import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  cartIcon = faCartShopping;
  searchIcon = faMagnifyingGlass;
  totalQuantity: number = 0;
  
  show_navbar = true;
  prevScrollPos = window.pageYOffset;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.totalQuantity.subscribe(
      data => {
        this.totalQuantity = data
      }
    )
  }

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
