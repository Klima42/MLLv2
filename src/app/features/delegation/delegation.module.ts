import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DelegationComponent } from './components/delegation.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DelegationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DelegationComponent }
    ])
  ]
})
export class DelegationModule { }