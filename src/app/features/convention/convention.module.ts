import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConventionComponent } from './components/convention.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ConventionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ConventionComponent }
    ])
  ]
})
export class ConventionModule { }