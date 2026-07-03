//Passo 2: Atualizar o seu EstoqueService para o Banco Real
//O seu componente de estoque e cadastro chamam o EstoqueService. Vamos mudar esse Service para que ele pare de usar dados estáticos na memória e passe a usar a URL pública do Senac.
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private http = inject(HttpClient);
  
  // Usando a URL pública do Senac que você confirmou!
  private apiUrl = 'http://academico3.rj.senac.br/20261prjint3manha-estoque/api/produtos';

  // Buscar todos do banco
  getItens(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // Cadastrar no banco
  adicionarItem(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // Excluir do banco usando o ID do produto
  removerItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}