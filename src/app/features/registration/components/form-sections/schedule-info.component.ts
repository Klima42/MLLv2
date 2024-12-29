import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold">Horaires souhaités</h2>
      <div class="space-y-4" [formGroup]="scheduleForm">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Date d'accueil souhaitée</label>
          <input 
            formControlName="startDate" 
            type="date" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
          <div *ngIf="scheduleForm.get('startDate')?.errors?.['required'] && scheduleForm.get('startDate')?.touched" 
               class="text-red-500 text-sm mt-1">
            Ce champ est requis
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Commentaires</label>
          <textarea 
            formControlName="comments" 
            rows="4"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Précisez vos besoins spécifiques..."
          ></textarea>
        </div>
      </div>
    </div>
  `
})
export class ScheduleInfoComponent {
  @Input() scheduleForm!: FormGroup;
}