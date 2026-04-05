import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing-module';
import { CaseCard } from './components/case-card/case-card';
import { CaseList } from './components/case-list/case-list';
import { CasesPage } from './cases-page/cases-page';


@NgModule({
  declarations: [
    CaseCard,
    CaseList,
    CasesPage
  ],
  imports: [
    CommonModule,
    CasesRoutingModule,
  ]
})
export class CasesModule { }
