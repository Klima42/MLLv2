import { Component } from '@angular/core';

@Component({
  selector: 'app-convention',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="Convention collective" 
        subtitle="Le cadre légal de notre activité"
      />
      <app-page-content>
        <div class="prose prose-green max-w-none">
          <p class="text-lg text-gray-600 leading-relaxed mb-4">
            La CCN a été établie en 2004, la loi autorisant le regroupement d'assistantes maternelles 
            dans un lieu extérieur à son domicile est parue en 2010.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Nous restons des assistantes maternelles employées du particulier employeur. 
            La CCN est donc toujours applicable et est la référence pour notre métier.
          </p>
        </div>
      </app-page-content>
    </div>
  `
})
export class ConventionComponent { }