import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';

@Component({
  selector: 'app-cadastrar-item',
  standalone: true,
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './cadastrar-item.html'
})
export class CadastrarItem {

  private router = inject(Router);
  private estoqueService = inject(EstoqueService);

  nome = '';
  codigo = '';
  preco = '';
  qtdMinima = '';
  categoria = '';
  sucesso = false;

  cadastrar() {
    if (this.nome && this.codigo && this.preco && this.qtdMinima) {
      this.sucesso = true;
      const adicionado = this.estoqueService.adicionarItem({
        nome: this.nome,
        codigo: this.codigo,
        categoria: this.categoria,
        qtdAtual: Number(this.qtdMinima),
        qtdMinima: Number(this.qtdMinima)     
      });
      this.sucesso = adicionado;
      if (!adicionado){
        alert('Código já cadastrado.')
      }
      setTimeout(() => this.sucesso = false, 3000);
      this.apagar();
    }
  }

  apagar() {
    this.nome = '';
    this.codigo = '';
    this.preco = '';
    this.qtdMinima = '';
    this.categoria = '';
  }

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}