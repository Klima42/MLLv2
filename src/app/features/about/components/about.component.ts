import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="Qu'est-ce qu'une MAM ?" 
        subtitle="Découvrez notre mode d'accueil unique qui combine les avantages de l'accueil individuel et collectif"
      />
      <app-page-content>
        <div class="prose prose-green max-w-none">
          <p class="text-lg text-gray-600 leading-relaxed">
            Une Maison d'Assistantes Maternelles (MAM) est un lieu où plusieurs assistantes maternelles agréées se regroupent pour accueillir les enfants dans un espace dédié et adapté.
          </p>
        </div>
      </app-page-content>
    </div>
  `
})
export class AboutComponent { }