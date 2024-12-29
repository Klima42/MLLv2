import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="Projet éducatif" 
        subtitle="Notre approche pédagogique pour l'épanouissement de vos enfants"
      />
      <app-page-content>
        <div class="prose prose-green max-w-none">
          <p class="text-lg text-gray-600 leading-relaxed">
            Notre projet éducatif est centré sur l'épanouissement et le développement 
            harmonieux de chaque enfant.
          </p>
        </div>
      </app-page-content>
    </div>
  `
})
export class ProjectComponent { }