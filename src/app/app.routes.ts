import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { EsqueciSenha } from './pages/esqueci-senha/esqueci-senha';
import { RedefinirSenha } from './pages/redefinir-senha/redefinir-senha';
import { Estoque } from './pages/estoque/estoque';
import { CadastrarItem } from './pages/cadastrar-item/cadastrar-item';
import { SaidaItem } from './pages/saida-item/saida-item';
import { Relatorio } from './pages/relatorio/relatorio';
import { HomeInterno } from './pages/home-interno/home-interno';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: Cadastro },
  { path: 'esqueci-senha', component: EsqueciSenha },
  { path: 'redefinir-senha', component: RedefinirSenha },
  { path: 'estoque', component: Estoque },
  { path: 'cadastrar-item', component: CadastrarItem },
  { path: 'saida-item', component: SaidaItem },
  { path: 'relatorio', component: Relatorio },
  { path: 'home-interno', component: HomeInterno },
  { path: '**', redirectTo: 'home-interno' }
];