import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="space-y-1">
      <a *ngFor="let item of navigationItems" 
         [routerLink]="item.path"
         routerLinkActive="bg-primary-600 text-white"
         [routerLinkActiveOptions]="{exact: item.path === '/'}"
         class="flex items-center px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
        {{ item.label }}
      </a>
    </nav>
  `
})
export class NavigationComponent {
  navigationItems = [
    { path: '/about', label: "Qu'est-ce qu'une MAM ?" },
    { path: '/delegation', label: 'La délégation' },
    { path: '/project', label: 'Projet éducatif' },
    { path: '/schedule', label: 'Horaires' },
    { path: '/pricing', label: 'Tarifs' },
    { path: '/caf', label: 'La CAF' },
    { path: '/convention', label: 'Convention collective' }
  ];
}