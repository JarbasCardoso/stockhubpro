import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common'; 
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { EstoqueService } from '../../services/estoque'; // Mantido o caminho original que funciona!
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [CommonModule, Footer, AsyncPipe], 
  templateUrl: './relatorio.html'
})
export class Relatorio implements OnInit {
  private router = inject(Router);
  private estoqueService = inject(EstoqueService);

  itens$!: Observable<any[]>;

  ngOnInit() {
    this.itens$ = this.estoqueService.getItens();
    
    // Esse subscribe serve apenas para vocês verem os dados chegando no F12 do navegador
    this.estoqueService.getItens().subscribe({
      next: (dados: any) => console.log('Dados no Relatório:', dados),
      error: (err) => console.error('Erro ao carregar relatório:', err)
    });
  }

  voltar() {
    this.router.navigate(['/home-interno']);
  }
}