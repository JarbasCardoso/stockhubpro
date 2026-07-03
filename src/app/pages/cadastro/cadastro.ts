import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';
import { AuthService } from '../../services/auth'; // Importamos o serviço de autenticação

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  // Injeções de dependência ficam bem no início da classe
  private router = inject(Router);
  private authService = inject(AuthService); // A variável fica exatamente aqui!

  nomeEmpresa = '';
  cnpj = '';
  nomeUsuario = '';
  email = '';
  cpf = '';
  senha = '';
  confirmarSenha = '';
  mostrarSenha = false;
  mostrarConfirmar = false;
  mostrarSucesso = false;
  mostrarErroCnpj = false;

  cadastrar() {
    const cnpjValido = /^\d{14}$/.test(this.cnpj);
    const cpfValido = /^\d{11}$/.test(this.cpf);
    const senhaValida = /^(?=.*[A-Z]).{8,}$/.test(this.senha);
    const senhasIguais = this.senha === this.confirmarSenha;

    if (!cnpjValido) { this.mostrarErroCnpj = true; return; }
    
    if (cnpjValido && cpfValido && senhaValida && senhasIguais) {
      
      // Monta o objeto no formato exato que a tabela Usuários do HeidiSQL exige
      const novoUsuario = {
        usuarioNome: this.nomeUsuario,
        empresaNome: this.nomeEmpresa,
        usuarioEmail: this.email,
        usuarioCpf: this.cpf,
        usuarioSenha: this.senha,
        usuarioStatus: 1
      };

      // Dispara o POST real para a API do Senac usando o serviço injetado
      this.authService.cadastrarUsuario(novoUsuario).subscribe({
        next: () => {
          this.mostrarSucesso = true;
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao registrar usuário no banco de dados. Verifique se o CPF já existe.');
        }
      });
    }
  }

  fecharSucesso() { this.mostrarSucesso = false; this.router.navigate(['/login']); }
  fecharErroCnpj() { this.mostrarErroCnpj = false; }
  toggleSenha() { this.mostrarSenha = !this.mostrarSenha; }
  toggleConfirmar() { this.mostrarConfirmar = !this.mostrarConfirmar; }
  irLogin() { this.router.navigate(['/login']); }
}
