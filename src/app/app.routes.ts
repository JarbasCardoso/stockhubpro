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
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: Cadastro },
  { path: 'esqueci-senha', component: EsqueciSenha },
  { path: 'redefinir-senha', component: RedefinirSenha },
  { path: 'home-interno', component: HomeInterno, canActivate: [authGuard] },
  { path: 'estoque', component: Estoque, canActivate: [authGuard] },
  { path: 'cadastrar-item', component: CadastrarItem, canActivate: [authGuard] },
  { path: 'saida-item', component: SaidaItem, canActivate: [authGuard] },
  { path: 'relatorio', component: Relatorio, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];