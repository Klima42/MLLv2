import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricingComponent } from './components/pricing.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PricingComponent }
    ])
  ]
})
export class PricingModule { }