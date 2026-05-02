import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayout } from './pages/dashboard-layout/dashboard-layout';
import { CampaignTable } from './components/campaign-table/campaign-table';
import { Stats } from './components/stats/stats';
import { CampaignView } from './components/campaign-view/campaign-view';
import { AdminGuard } from '../../core/guards/admin-guard';

const routes: Routes = [
    {
  path: '',
  component: DashboardLayout,
  canActivate: [AdminGuard],
  children: [
    {
      path: 'campaigns',
      component: CampaignTable
    },
    {
      path: 'campaign/:id',
      component: CampaignView
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
