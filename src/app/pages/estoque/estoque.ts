//Passo 4: Adaptar a sua tela de Estoque (estoque.ts)
//Como agora as requisições buscam dados assíncronos da internet, precisamos criar um array local para guardar os itens e usar o ciclo de vida ngOnInit para carregar a lista do banco de dados assim que a tela abrir.
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [FormsModule, Footer, CommonModule],
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque implements OnInit {
  private router = inject(Router);
  private estoqueService = inject(EstoqueService);
  
  listaProdutos: Produto[] = []; // Array que vai segurar os dados vindos do banco
  busca = '';
  mostrarExcluido = false;
  mostrarEditado = false;

  ngOnInit(): void {
    this.carregarEstoque();
  }

  carregarEstoque() {
    this.estoqueService.getItens().subscribe({
      next: (dados) => {
        this.listaProdutos = dados;
      },
      error: (err) => console.error('Erro ao carregar banco:', err)
    });
  }

  get itensFiltrados() {
    return this.listaProdutos.filter(i =>
      i.produtoNome.toLowerCase().includes(this.busca.toLowerCase())
    );
  }

  get totalItens() {
    return this.listaProdutos.reduce((acc, i) => acc + i.produtoQuantidade, 0);
  }

  excluir(index: number) {
    const item = this.itensFiltrados[index];
    if (item.produtoId) {
      this.estoqueService.removerItem(item.produtoId).subscribe({
        next: () => {
          this.mostrarExcluido = true;
          this.carregarEstoque(); // Recarrega a tabela limpa
        }
      });
    }
  }

  editar(index: number) {
    this.mostrarEditado = true;
  }

  voltar() { this.router.navigate(['/home-interno']); }
}