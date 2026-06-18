import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './relatorio.html'
})
export class Relatorio {

  private router = inject(Router);

  itens = [
    { codigo: 'P001', nome: 'Produto A', entradas: 100, saidas: 40, saldo: 60 },
    { codigo: 'P002', nome: 'Produto B', entradas: 200, saidas: 80, saldo: 120 },
    { codigo: 'P003', nome: 'Produto C', entradas: 150, saidas: 50, saldo: 100 },
  ];

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}