import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common'; // Adicionado o AsyncPipe aqui
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [CommonModule, Footer, AsyncPipe], // Colocado o AsyncPipe aqui
  templateUrl: './relatorio.html'
})
export class Relatorio {
  private router = inject(Router);
  private estoqueService = inject(EstoqueService);

  get itens() {
    return this.estoqueService.getItens();
  }

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}
