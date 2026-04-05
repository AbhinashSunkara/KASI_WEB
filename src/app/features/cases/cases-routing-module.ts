import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesPage } from './cases-page/cases-page';

const routes: Routes = [
  {
    path: '',
    component: CasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
