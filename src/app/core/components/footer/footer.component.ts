import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t bg-white/50 backdrop-blur-sm">
      <div class="max-w-[980px] mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="space-y-3">
            <h3 class="font-semibold">Contact</h3>
            <p class="text-sm text-gray-600">contact&#64;mam.fr</p>
            <p class="text-sm text-gray-600">01 23 45 67 89</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold">Horaires</h3>
            <p class="text-sm text-gray-600">Du lundi au vendredi</p>
            <p class="text-sm text-gray-600">6h30 - 18h30</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}