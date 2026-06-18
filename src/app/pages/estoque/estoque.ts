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

  get itensFiltrados() {
  return this.estoqueService.getItens().filter(i =>
    i.nome.toLowerCase().includes(this.busca.toLowerCase())
  );
  }

 
  get totalItens() {
  return this.estoqueService.getItens().reduce((acc, i) => acc + i.qtdAtual, 0);
 }

  excluir(index: number) {
  const item = this.itensFiltrados[index];
  this.estoqueService.itens = this.estoqueService.itens.filter(i => i.codigo !== item.codigo);
  this.mostrarExcluido = true;
}

  editar(index: number) {
    this.mostrarEditado = true;
  }

  voltar() { this.router.navigate(['/']); }
}