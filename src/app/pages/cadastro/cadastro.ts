import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  private router = inject(Router);

  nomeEmpresa = '';
  cnpj = '';
  nomeUsuario = '';
  email = '';
  cpf = '';
  senha = '';
  confirmarSenha = '';
  mostrarSenha = false;
  mostrarConfirmar = false;
  mostrarSucesso = false;
  mostrarErroCnpj = false;

  cadastrar() {
    const cnpjValido = /^\d{14}$/.test(this.cnpj);
    const cpfValido = /^\d{11}$/.test(this.cpf);
    const senhaValida = /^(?=.*[A-Z]).{8,}$/.test(this.senha);
    const senhasIguais = this.senha === this.confirmarSenha;

    if (!cnpjValido) { this.mostrarErroCnpj = true; return; }
    if (cnpjValido && cpfValido && senhaValida && senhasIguais) {
      localStorage.setItem('empresa', this.nomeEmpresa);
      localStorage.setItem('nome', this.nomeUsuario);
      localStorage.setItem('cpf', this.cpf);
      localStorage.setItem('email', this.email);
      this.mostrarSucesso = true;
    }
  }

  fecharSucesso() { this.mostrarSucesso = false; this.router.navigate(['/login']); }
  fecharErroCnpj() { this.mostrarErroCnpj = false; }
  toggleSenha() { this.mostrarSenha = !this.mostrarSenha; }
  toggleConfirmar() { this.mostrarConfirmar = !this.mostrarConfirmar; }
  irLogin() { this.router.navigate(['/login']); }
}