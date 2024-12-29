import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
  exports: [
    ButtonComponent,
    PageHeaderComponent,
    PageContentComponent
  ]
})
export class SharedModule { }