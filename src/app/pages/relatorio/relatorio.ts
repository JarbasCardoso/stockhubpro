import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [CommonModule, Footer],
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