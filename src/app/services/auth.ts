import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  login(cpf: string, senha: string): boolean {
    const cpfValido = cpf.length === 11;
    const senhaValida = senha.length >= 8;
    if (cpfValido && senhaValida) {
      localStorage.setItem('logado', 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('logado');
    this.router.navigate(['/login']);
  }

  isLogado(): boolean {
    return localStorage.getItem('logado') === 'true';
  }
}