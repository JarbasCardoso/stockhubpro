import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private router = inject(Router);
  cpf = '';
  senha = '';
  mostrarSenha = false;
  mostrarErro = false;

 entrar() {
  const cpfValido = this.cpf.length === 11;
  const senhaValida = this.senha.length >= 8;
  if (cpfValido && senhaValida) {
    this.router.navigate(['/home-interno']);
  } else {
    this.mostrarErro = true;
  }
}

  fecharErro() { this.mostrarErro = false; }
  toggleSenha() { this.mostrarSenha = !this.mostrarSenha; }
  cancelar() { this.router.navigate(['/']); }
  irCadastro() { this.router.navigate(['/cadastro']); }
  irEsqueci() { this.router.navigate(['/esqueci-senha']); }
}