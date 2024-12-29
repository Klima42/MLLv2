import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, LogoComponent, NavigationComponent],
  template: `
    <aside class="fixed inset-y-0 left-0 w-64 bg-white border-r transform -translate-x-full lg:translate-x-0 transition-transform duration-200 ease-in-out">
      <div class="h-16 flex items-center px-6 border-b">
        <app-logo />
      </div>
      
      <div class="px-4 py-6">
        <app-navigation />
        
        <div class="pt-4">
          <a routerLink="/registration"
             class="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
            Pré-inscription
          </a>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {}