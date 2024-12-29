import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="flex items-center gap-3 hover:opacity-90 transition-opacity">
      <img 
        src="/assets/lemuriens-logo.png" 
        alt="Les Lémuriens Logo" 
        class="h-10 w-auto"
      />
      <div class="flex flex-col">
        <span class="text-base font-semibold leading-tight">MAM</span>
        <span class="text-xs text-primary-600">Les Lémuriens</span>
      </div>
    </a>
  `
})
export class LogoComponent {}