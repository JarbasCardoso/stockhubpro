import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { HttpClient } from '@angular/common/http'; // Importante para conectar à API

@Component({
  selector: 'app-saida-item',
  standalone: true,
  imports: [CommonModule, FormsModule, Footer],
  templateUrl: './saida-item.html'
})
export class SaidaItem {

  private router = inject(Router);
  private http = inject(HttpClient); 

  codigo = '';       // Será mapeado para o produtoId
  quantidade = '';   // Será mapeado para o vendaQuantidade
  sucesso = false;
  erro = false;

registrar() {
  if (this.codigo && this.quantidade) {
    const qtdSubtrair = Number(this.quantidade);
    const urlApiProdutos = 'http://academico3.rj.senac.br/20261prjint3manha-estoque/api/produtos';

    // 1. Busca todos os produtos reais do banco do Senac
    this.http.get<any[]>(urlApiProdutos).subscribe({
      next: (produtos) => {
        console.log('Produtos carregados do banco:', produtos);

        // 2. Procura pelo campo produtoCodigo (ex: "001") que você digitou na tela
        const produtoExistente = produtos.find(p => p.produtoCodigo == this.codigo.trim());

        if (produtoExistente) {
          // 3. Calcula a subtração com a quantidade atual que veio do banco
          const novaQuantidade = produtoExistente.produtoQuantidade - qtdSubtrair;

          if (novaQuantidade < 0) {
            alert(`Estoque insuficiente! Você só tem ${produtoExistente.produtoQuantidade} unidades.`);
            return;
          }

          // Monta o objeto mantendo a estrutura original e atualizando a quantidade
          const produtoAtualizado = {
            ...produtoExistente,
            produtoQuantidade: novaQuantidade // Atualiza a propriedade certa do banco
          };

          // 4. Envia o PUT usando o ID numérico interno que o banco gerou para ele
          this.http.put(`${urlApiProdutos}/${produtoExistente.produtoId}`, produtoAtualizado).subscribe({
            next: () => {
              this.sucesso = true;
              this.erro = false;
              setTimeout(() => this.sucesso = false, 3000);
              this.limpar();
            },
            error: (err) => {
              console.error('Erro ao atualizar o produto:', err);
              alert('Erro ao salvar a nova quantidade no servidor.');
            }
          });

        } else {
          alert(`O produto com código "${this.codigo}" não foi encontrado na tabela do banco!`);
        }
      },
      error: (err) => {
        console.error('Erro na requisição GET:', err);
        alert('Erro ao conectar com o banco do Senac.');
      }
    });

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