import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold">Information des parents</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4" [formGroup]="parentForm">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input 
            formControlName="parentLastName" 
            type="text" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="parentForm.get('parentLastName')?.errors?.['required'] && parentForm.get('parentLastName')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
          <input 
            formControlName="parentFirstName" 
            type="text" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="parentForm.get('parentFirstName')?.errors?.['required'] && parentForm.get('parentFirstName')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            formControlName="email" 
            type="email" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="parentForm.get('email')?.errors?.['required'] && parentForm.get('email')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
          <div *ngIf="parentForm.get('email')?.errors?.['email'] && parentForm.get('email')?.touched" 
               class="text-red-500 text-sm mt-1">
            Email invalide
          </div>
        </div>
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input 
            formControlName="phone" 
            type="tel" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="parentForm.get('phone')?.errors?.['required'] && parentForm.get('phone')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
      </div>
    </div>
  `
})
export class ParentInfoComponent {
  @Input() parentForm!: FormGroup;
}