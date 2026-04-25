import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen = false;

  toggleMenu(event: Event) {
    event.stopPropagation(); // prevent immediate close
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // 👇 This closes menu when clicking ANYWHERE
  @HostListener('document:click')
  onDocumentClick() {
    this.isMenuOpen = false;
  }

}