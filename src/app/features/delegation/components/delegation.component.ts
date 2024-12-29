import { Component } from '@angular/core';

@Component({
  selector: 'app-delegation',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="La délégation" 
        subtitle="Comprendre le fonctionnement de la délégation d'accueil dans notre MAM"
      />
      <app-page-content>
        <div class="prose prose-green max-w-none">
          <p class="text-lg text-gray-600 leading-relaxed">
            La délégation d'accueil permet aux assistantes maternelles de la MAM de s'organiser 
            pour assurer la continuité de l'accueil des enfants.
          </p>
        </div>
      </app-page-content>
    </div>
  `
})
export class DelegationComponent { }