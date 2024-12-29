import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { RegistrationService } from '../services/registration.service';
import { ParentInfoComponent } from './form-sections/parent-info.component';
import { ChildInfoComponent } from './form-sections/child-info.component';
import { ScheduleInfoComponent } from './form-sections/schedule-info.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    SharedModule,
    ParentInfoComponent,
    ChildInfoComponent,
    ScheduleInfoComponent
  ],
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="Pré-inscription" 
        subtitle="Remplissez ce formulaire pour pré-inscrire votre enfant à la MAM"
      />
      <app-page-content>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-8 max-w-2xl mx-auto">
          <app-parent-info [parentForm]="form" />
          <app-child-info [childForm]="form" />
          <app-schedule-info [scheduleForm]="form" />

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
      </app-page-content>
    </div>
  `
})
export class RegistrationComponent {
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

      this.registrationService.submitRegistration(this.form.value).subscribe({
        next: () => {
          this.submitSuccess = true;
          this.form.reset();
          this.isSubmitting = false;
        },
        error: (error: any) => {
          this.submitError = 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.';
          this.isSubmitting = false;
          console.error('Registration error:', error);
        }
      });
    }
  }
}