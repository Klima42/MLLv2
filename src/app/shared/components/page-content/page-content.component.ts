import { Component } from '@angular/core';

@Component({
  selector: 'app-page-content',
  template: `
    <div class="bg-white rounded-lg shadow-sm p-8">
      <ng-content></ng-content>
    </div>
  `
})
export class PageContentComponent { }