import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home-interno',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './home-interno.html',
  styleUrl: './home-interno.css'
})
export class HomeInterno {
  private router = inject(Router);

  mostrarPerfil = false;

  empresa = 'StockHub Ltda';
  nome = 'Administrador';
  cpf = '12345678901';
  email = 'admin@stockhub.com';

  totalItens = 28;
  totalEntradas = 2000;
  totalSaidas = 988;

  abrirPerfil() { this.mostrarPerfil = true; }
  fecharPerfil() { this.mostrarPerfil = false; }
  sair() { this.router.navigate(['/']); }
  irCadastrarItem() { this.router.navigate(['/cadastrar-item']); }
  irSaidaItem() { this.router.navigate(['/saida-item']); }
  irRelatorio() { this.router.navigate(['/relatorio']); }
  irEstoque() { this.router.navigate(['/estoque']); }
}