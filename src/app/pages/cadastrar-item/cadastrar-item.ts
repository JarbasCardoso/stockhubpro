import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';
import { Produto } from '../../models/produto.model';

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
  qtdAtual = ''; // Mudado o nome para fazer mais sentido com o seu JSON
  sucesso = false;

  cadastrar() {
    if (this.nome && this.codigo && this.preco && this.qtdAtual) {
      
      // Montando o objeto exatamente igual ao JSON exigido pelo banco
      const novoProduto: Produto = {
        produtoNome: this.nome,
        produtoCodigo: Number(this.codigo),
        produtoPreco: Number(this.preco),
        produtoQuantidade: Number(this.qtdAtual),
        produtoDataValidade: "2026-12-31", // Data padrão temporária
        produtoStatus: 1
      };

      // Disparando o POST para o banco de dados
      this.estoqueService.adicionarItem(novoProduto).subscribe({
        next: (resposta) => {
          this.sucesso = true;
          setTimeout(() => this.sucesso = false, 3000);
          this.apagar();
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao cadastrar produto na API do Senac. Verifique se o código já existe.');
        }
      });
    }
  }

  apagar() {
    this.nome = '';
    this.codigo = '';
    this.preco = '';
    this.qtdAtual = '';
  }

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}