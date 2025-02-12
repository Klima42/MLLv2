import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CafComponent } from './components/caf.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CafComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CafComponent }
    ])
  ]
})
export class CafModule { }