import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { CampaignTable } from './components/campaign-table/campaign-table';
import { Stats } from './components/stats/stats';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { DashboardLayout } from './pages/dashboard-layout/dashboard-layout';
import { CampaignView } from './components/campaign-view/campaign-view';


@NgModule({
  declarations: [
    CampaignTable,
    Stats,
    Header,
    Sidebar,
    DashboardLayout,
    CampaignView
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
