import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="Horaires" 
        subtitle="Les horaires d'ouverture et périodes de fermeture de la MAM"
      />
      <app-page-content>
        <div class="space-y-4">
          <p class="text-lg text-gray-600">
            La MAM est ouverte du lundi au vendredi de 6h30 à 18h30 et fermée 8 semaines dans l'année.
          </p>
          <p class="text-lg text-gray-600 italic">
            Les horaires ne sont pas fixes.
          </p>
        </div>
      </app-page-content>
    </div>
  `
})
export class ScheduleComponent { }