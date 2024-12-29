import { Component } from '@angular/core';

@Component({
  selector: 'app-caf',
  template: `
    <div class="space-y-8">
      <app-page-header 
        title="La CAF" 
        subtitle="Le complément de libre choix du mode de garde"
      />
      <app-page-content>
        <div class="space-y-6">
          <p class="text-lg text-gray-600">
            Employer une assistante maternelle vous donne droit à cette aide selon certaines conditions.
          </p>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age de l'enfant gardé</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tranche 1</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tranche 2</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tranche 3</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4">Moins de 3 ans</td>
                  <td class="px-6 py-4">506 euros</td>
                  <td class="px-6 py-4">319.07 euros</td>
                  <td class="px-6 py-4">191.41 euros</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">De 3 ans à 6 ans</td>
                  <td class="px-6 py-4">253 euros</td>
                  <td class="px-6 py-4">159.56 euros</td>
                  <td class="px-6 py-4">95.71 euros</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </app-page-content>
    </div>
  `
})
export class CafComponent { }