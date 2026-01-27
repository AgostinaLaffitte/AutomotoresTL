import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: false
})
export class Login {
  username = '';
  password = '';
  showToast = false;


  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/']); // redirige al listado de vehículos
      },
      error: () => {
            this.showToast = true;

      // Opcional: que se oculte solo después de 3 segundos
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
        }
    });
  }
}
