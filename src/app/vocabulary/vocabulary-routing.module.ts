import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabularyPage } from './vocabulary.page';

const routes: Routes = [
  {
    path: '',
    component: VocabularyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocabularyPageRoutingModule {}
