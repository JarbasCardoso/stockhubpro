import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css'
})
export class EsqueciSenha {
  private router = inject(Router);
  cpf = '';

  prosseguir() {
    if (/^\d{11}$/.test(this.cpf)) {
      this.router.navigate(['/redefinir-senha']);
    }
  }

  cancelar() { this.router.navigate(['/login']); }
}