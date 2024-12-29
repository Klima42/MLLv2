import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="Tarifs" 
        subtitle="Nos tarifs sont établis selon la convention collective nationale"
      />
      <app-page-content>
        <div class="prose prose-green max-w-none">
          <p class="text-lg text-gray-600 leading-relaxed">
            Nos tarifs sont établis selon la convention collective nationale des assistants maternels.
          </p>
        </div>
      </app-page-content>
    </div>
  `
})
export class PricingComponent { }