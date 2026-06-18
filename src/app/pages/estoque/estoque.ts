import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  private router = inject(Router);
  private estoqueService = inject(EstoqueService);
  busca = '';
  mostrarExcluido = false;
  mostrarEditado = false;
  mostrarQtdMinima = false;
  itemQtdMinima = '';

  itens = [
    { nome: 'Produto A', codigo: '001', categoria: 'Eletrônicos', qtdAtual: 5, qtdMinima: 10 },
    { nome: 'Produto B', codigo: '002', categoria: 'Informática', qtdAtual: 20, qtdMinima: 5 },
    { nome: 'Produto C', codigo: '003', categoria: 'Papelaria', qtdAtual: 3, qtdMinima: 8 },
  ];

  get itensFiltrados() {
    return this.itens.filter(i =>
      i.nome.toLowerCase().includes(this.busca.toLowerCase())
    );
  }

  get totalItens() {
    return this.itens.reduce((acc, i) => acc + i.qtdAtual, 0);
  }

  excluir(index: number) {
    const item = this.itensFiltrados[index];
    this.itens = this.itens.filter(i => i.codigo !== item.codigo);
    this.mostrarExcluido = true;
  }

  editar(index: number) {
    this.mostrarEditado = true;
  }

  voltar() { this.router.navigate(['/']); }
}