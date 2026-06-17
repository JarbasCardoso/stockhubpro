import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer'; 

@Component({
  selector: 'app-cadastrar-item',
  standalone: true,
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './cadastrar-item.html'
})
export class CadastrarItem {

  private router = inject(Router);

  nome = '';
  codigo = '';
  preco = '';
  qtdMinima = '';
  sucesso = false;

  cadastrar() {
    if (this.nome && this.codigo && this.preco && this.qtdMinima) {
      this.sucesso = true;
      setTimeout(() => this.sucesso = false, 3000);
      this.apagar();
    }
  }

  apagar() {
    this.nome = '';
    this.codigo = '';
    this.preco = '';
    this.qtdMinima = '';
  }

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}