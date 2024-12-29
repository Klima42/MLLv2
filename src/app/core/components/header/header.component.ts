import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  template: `
    <header class="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b">
      <div class="max-w-[980px] mx-auto px-4">
        <div class="flex h-16 items-center">
          <app-logo />
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}