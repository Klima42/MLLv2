import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="relative bg-primary-600 text-white rounded-xl overflow-hidden mb-8">
      <div class="px-8 py-16">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {{ title }}
          </h1>
          <p *ngIf="subtitle" class="text-xl text-white/90 leading-relaxed">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}