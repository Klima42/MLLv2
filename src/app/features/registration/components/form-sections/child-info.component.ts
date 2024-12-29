import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold">Information de l'enfant</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4" [formGroup]="childForm">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom de l'enfant</label>
          <input 
            formControlName="childLastName" 
            type="text" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="childForm.get('childLastName')?.errors?.['required'] && childForm.get('childLastName')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Prénom de l'enfant</label>
          <input 
            formControlName="childFirstName" 
            type="text" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="childForm.get('childFirstName')?.errors?.['required'] && childForm.get('childFirstName')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
        <div class="col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
          <input 
            formControlName="birthDate" 
            type="date" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="childForm.get('birthDate')?.errors?.['required'] && childForm.get('birthDate')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
      </div>
    </div>
  `
})
export class ChildInfoComponent {
  @Input() childForm!: FormGroup;
}