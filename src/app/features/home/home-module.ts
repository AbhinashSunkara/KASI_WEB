import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Case } from '../../core/services/case';
import { CasesPreview } from './components/cases-preview/cases-preview';
import { Values } from './components/values/values';
import { HomePage } from './home-page/home-page';


@NgModule({
  declarations: [
    Hero,
    HomePage,
    HowItWorks,
    CasesPreview,
    Values
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
