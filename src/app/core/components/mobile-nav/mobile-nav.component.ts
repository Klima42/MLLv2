import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  template: `
    <button (click)="isOpen = !isOpen" class="md:hidden p-2">
      <span class="sr-only">Menu</span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div *ngIf="isOpen" class="fixed inset-0 z-50 lg:hidden">
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm" (click)="isOpen = false"></div>
      
      <div class="fixed top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between h-16 px-6 border-b">
            <span class="text-base font-semibold">Menu</span>
            <button (click)="isOpen = false" class="p-2">
              <span class="sr-only">Fermer</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="flex-1 overflow-y-auto py-6 px-4">
            <app-navigation />
          </div>
        </div>
      </div>
    </div>
  `
})
export class MobileNavComponent {
  isOpen = false;
}