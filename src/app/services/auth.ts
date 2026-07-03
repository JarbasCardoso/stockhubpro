import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  // Endpoint voltado para a tabela de usuários
  private apiUrl = 'http://academico3.rj.senac.br/20261prjint3manha-estoque/api/usuarios';

  // 1. Cadastrar Usuário no Banco Real
  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // 2. Validar Login buscando as credenciais no banco do professor
  login(cpf: string, senha: string): Observable<boolean> {
    return this.http.get<Usuario[]>(this.apiUrl).pipe(
      map((usuarios: Usuario[]) => {
        // Procura na lista da API se existe alguém com o mesmo CPF e Senha
        const usuarioEncontrado = usuarios.find(
          u => u.usuarioCpf === cpf && u.usuarioSenha === senha
        );

        if (usuarioEncontrado) {
          // Guarda os dados reais do usuário vindo do banco no localStorage para exibir no Perfil
          localStorage.setItem('logado', 'true');
          localStorage.setItem('empresa', usuarioEncontrado.empresaNome);
          localStorage.setItem('nome', usuarioEncontrado.usuarioNome);
          localStorage.setItem('cpf', usuarioEncontrado.usuarioCpf);
          localStorage.setItem('email', usuarioEncontrado.usuarioEmail);
          return true;
        }

        return false;
      })
    );
  }

  logout() {
    localStorage.clear(); // Limpa todo o histórico de sessão
    this.router.navigate(['/login']);
  }

  isLogado(): boolean {
    return localStorage.getItem('logado') === 'true';
  }
}
