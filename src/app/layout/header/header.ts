import { Component, HostListener } from '@angular/core';
import { RequestContextService } from '../../core/services/request.context';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMobileMenuOpen = false;
  isProfileMenuOpen = false;

  constructor(public context: RequestContextService) {
    console.log('User Role:', this.context.role);
    console.log('Is Admin:', this.context.isAdmin);
    console.log('IsLoggedIn:', this.context.isLoggedIn);
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isProfileMenuOpen = false;
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
    this.isMobileMenuOpen = false;
  }

  closeMenus() {
    this.isMobileMenuOpen = false;
    this.isProfileMenuOpen = false;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeMenus();
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
}