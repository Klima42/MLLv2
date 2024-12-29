import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '@/core/services/registration.service';

@Component({
  selector: 'app-registration-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-8 max-w-2xl mx-auto">
      <!-- Parent Information -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Information des parents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input 
              formControlName="parentLastName" 
              type="text" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input 
              formControlName="parentFirstName" 
              type="text" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              formControlName="email" 
              type="email" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <input 
              formControlName="phone" 
              type="tel" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
        </div>
      </div>

      <!-- Child Information -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Information de l'enfant</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nom de l'enfant</label>
            <input 
              formControlName="childLastName" 
              type="text" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Prénom de l'enfant</label>
            <input 
              formControlName="childFirstName" 
              type="text" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
            <input 
              formControlName="birthDate" 
              type="date" 
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
        </div>
      </div>

      <!-- Schedule Information -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Horaires souhaités</h2>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Date d'accueil souhaitée</label>
          <input 
            formControlName="startDate" 
            type="date" 
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
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

      <div class="flex justify-end">
        <button type="submit" 
                [disabled]="form.invalid || isSubmitting"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50">
          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la pré-inscription' }}
        </button>
      </div>

      <div *ngIf="submitError" class="text-red-500 text-center mt-4">
        {{ submitError }}
      </div>
      <div *ngIf="submitSuccess" class="text-green-600 text-center mt-4">
        Votre pré-inscription a été envoyée avec succès !
      </div>
    </form>
  `
})
export class RegistrationFormComponent {
  form: FormGroup;
  isSubmitting = false;
  submitError = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.form = this.fb.group({
      parentLastName: ['', Validators.required],
      parentFirstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      childLastName: ['', Validators.required],
      childFirstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      startDate: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = '';
      this.submitSuccess = false;

      this.registrationService.submit(this.form.value).subscribe({
        next: () => {
          this.submitSuccess = true;
          this.form.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.submitError = 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.';
          this.isSubmitting = false;
          console.error('Registration error:', error);
        }
      });
    }
  }
}