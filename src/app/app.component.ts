import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex min-h-screen">
      <app-sidebar></app-sidebar>
      <div class="flex-1 lg:pl-64">
        <app-header></app-header>
        <main class="pt-16 p-6">
          <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
      </div>
    </div>
  `
})
export class AppComponent { }