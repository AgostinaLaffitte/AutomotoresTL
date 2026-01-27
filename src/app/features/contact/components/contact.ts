// src/app/features/contact/contact.component.ts
import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  standalone: false
})
export class Contact {
  name = '';
  email = '';
  message = '';
  sending = false;

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      alert('Completa todos los campos');
      return;
    }
    this.sending = true;
    this.contactService.sendMessage({ name: this.name, email: this.email, message: this.message })
      .subscribe({
        next: () => {
          alert('Mensaje enviado correctamente');
          this.name = '';
          this.email = '';
          this.message = '';
          this.sending = false;
        },
        error: () => {
          alert('No se pudo enviar el mensaje');
          this.sending = false;
        }
      });
  }
}
