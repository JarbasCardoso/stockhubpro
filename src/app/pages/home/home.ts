import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Footer],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private router = inject(Router);

  entrar() {
    this.router.navigate(['/login']);
  }
}