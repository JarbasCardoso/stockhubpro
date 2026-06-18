import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-saida-item',
  standalone: true,
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './saida-item.html'
})
export class SaidaItem {

  private router = inject(Router);

  codigo = '';
  quantidade = '';
  sucesso = false;
  erro = false;

  registrar() {
    if (this.codigo && this.quantidade) {
      this.sucesso = true;
      setTimeout(() => this.sucesso = false, 3000);
      this.limpar();
    } else {
      this.erro = true;
      setTimeout(() => this.erro = false, 3000);
    }
  }

  limpar() {
    this.codigo = '';
    this.quantidade = '';
  }

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}