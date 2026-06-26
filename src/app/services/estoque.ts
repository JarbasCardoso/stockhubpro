import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private getChave():string{
    const cpf = localStorage.getItem('cpf') || 'anonimo';
    return 'itens_${cpf}';
  }

  adicionarItem(item: any) {
    const itens = this.getItens();
    const existe = itens.find((i: any) => i.codigo === item.codigo);
    if (existe){
      return false;
    }
    itens.push(item);
    localStorage.setItem(this.getChave(), JSON.stringify(itens));
    return true;
  }

  getItens(): any[] {
    const dados = localStorage.getItem(this.getChave());
    return dados ? JSON.parse(dados) : [];
  }

  removerItem(codigo: string){
    const itens = this.getItens().filter((i: any) => i.codigo !== codigo);
    localStorage.setItem(this.getChave(), JSON.stringify(itens));
  }

}