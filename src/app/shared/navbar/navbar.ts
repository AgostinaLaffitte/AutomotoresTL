import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: false
})
export class Navbar implements OnInit {
  isLoggedIn = false;
  role: string | null = null;
  username: string | null = null;
  searchTerm: string = '';
  

  constructor(private auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.role = null;
    this.username = null;
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
   
    this.auth.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      this.role = this.auth.getUserRole();
      this.username = this.auth.getUserName();
    });
  }
 search() { 
  if (this.searchTerm.trim()) {
    this.router.navigate(['/vehicles'], { queryParams: { q: this.searchTerm } });
  } else {
    this.router.navigate(['/vehicles']);
  }
}
}
