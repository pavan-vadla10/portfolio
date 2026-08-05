import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  sendMessage() {
    const body = `Name: ${this.contact.name}
    Email: ${this.contact.email}
    Subject: ${this.contact.subject}
    Message:  ${this.contact.message}`;
    window.location.href = `mailto:yourmail@gmail.com?subject=${encodeURIComponent(this.contact.subject)}&body=${encodeURIComponent(body)}`;
  }
}
