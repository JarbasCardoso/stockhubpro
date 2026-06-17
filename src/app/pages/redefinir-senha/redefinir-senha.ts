import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-redefinir-senha',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './redefinir-senha.html',
  styleUrl: './redefinir-senha.css'
})
export class RedefinirSenha {
  private router = inject(Router);
  senha = '';
  confirmarSenha = '';
  mostrarSenha = false;
  mostrarConfirmar = false;
  mostrarSucesso = false;

  redefinir() {
    const senhaValida = /^(?=.*[A-Z]).{8,}$/.test(this.senha);
    const senhasIguais = this.senha === this.confirmarSenha;
    if (senhaValida && senhasIguais) {
      this.mostrarSucesso = true;
    }
  }

  fecharSucesso() { this.mostrarSucesso = false; this.router.navigate(['/login']); }
  toggleSenha() { this.mostrarSenha = !this.mostrarSenha; }
  toggleConfirmar() { this.mostrarConfirmar = !this.mostrarConfirmar; }
  cancelar() { this.router.navigate(['/login']); }
}