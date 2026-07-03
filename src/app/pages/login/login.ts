import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  cpf = '';
  senha = '';
  mostrarSenha = false;
  mostrarErro = false;

  entrar() {
    // Chama o serviço passando os dados digitados e se inscreve para receber a resposta
    this.authService.login(this.cpf, this.senha).subscribe({
      next: (sucessoLogin) => {
        if (sucessoLogin) {
          this.router.navigate(['/home-interno']); // Entra no sistema
        } else {
          this.mostrarErro = true; // Exibe o alerta de dados inválidos
        }
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao tentar conectar com o servidor de autenticação.');
      }
    });
  }

  fecharErro() { this.mostrarErro = false; }
  toggleSenha() { this.mostrarSenha = !this.mostrarSenha; }
  cancelar() { this.router.navigate(['/']); }
  irCadastro() { this.router.navigate(['/cadastro']); }
  irEsqueci() { this.router.navigate(['/esqueci-senha']); }
}