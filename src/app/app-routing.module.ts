import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'delegation', loadChildren: () => import('./features/delegation/delegation.module').then(m => m.DelegationModule) },
  { path: 'project', loadChildren: () => import('./features/project/project.module').then(m => m.ProjectModule) },
  { path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'schedule', loadChildren: () => import('./features/schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'pricing', loadChildren: () => import('./features/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'caf', loadChildren: () => import('./features/caf/caf.module').then(m => m.CafModule) },
  { path: 'convention', loadChildren: () => import('./features/convention/convention.module').then(m => m.ConventionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }