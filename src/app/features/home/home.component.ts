import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero">
      <div class="hero__content">
        <h1>Un lieu d'accueil unique<br>pour vos enfants.</h1>
        <p>Découvrez notre Maison d'Assistantes Maternelles, où bienveillance et professionnalisme se rencontrent.</p>
        <app-button routerLink="/registration">
          Pré-inscrire mon enfant
        </app-button>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule, ButtonComponent]
})
export class HomeComponent {}