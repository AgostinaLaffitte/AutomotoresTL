import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // ajustá la ruta según tu proyecto
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  standalone: false
})
export class Register {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  showToast = false;

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    // Validación simple: contraseñas iguales
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Llamada al servicio de registro
    this.auth.register(this.username, this.password, this.email).subscribe({
      next: () => {
        this.router.navigate(['/login']); // redirige al login después de registrarse
      },
      error: () => {
         this.showToast = true;

      // Opcional: que se oculte solo después de 3 segundos
          setTimeout(() => {
            this.showToast = false;
          }, 3000);
        
    } });
      
  }
}
