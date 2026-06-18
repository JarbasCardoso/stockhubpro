import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  itens: any[] = [
    { nome: 'Produto A', codigo: '001', categoria: 'Eletrônicos', qtdAtual: 5, qtdMinima: 10 },
    { nome: 'Produto B', codigo: '002', categoria: 'Informática', qtdAtual: 20, qtdMinima: 5 },
    { nome: 'Produto C', codigo: '003', categoria: 'Papelaria', qtdAtual: 3, qtdMinima: 8 },
  ];

  adicionarItem(item: any) {
    this.itens.push(item);
  }

  getItens() {
    return this.itens;
  }
}