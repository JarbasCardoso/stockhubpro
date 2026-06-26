import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque';

@Component({
  selector: 'app-home-interno',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './home-interno.html',
  styleUrl: './home-interno.css'
})
export class HomeInterno {
  private router = inject(Router);

  private estoqueService = inject(EstoqueService);

  mostrarPerfil = false;

  empresa = localStorage.getItem('empresa') || '';
  nome = localStorage.getItem('nome') || '';
  cpf = localStorage.getItem('cpf') || '';
  email = localStorage.getItem('email') || '';

  get totalItens(){
    return this.estoqueService.getItens().length;
  }

  abrirPerfil() { this.mostrarPerfil = true; }
  fecharPerfil() { this.mostrarPerfil = false; }
  sair() { this.router.navigate(['/']); }
  irCadastrarItem() { this.router.navigate(['/cadastrar-item']); }
  irSaidaItem() { this.router.navigate(['/saida-item']); }
  irRelatorio() { this.router.navigate(['/relatorio']); }
  irEstoque() { this.router.navigate(['/estoque']); }
}