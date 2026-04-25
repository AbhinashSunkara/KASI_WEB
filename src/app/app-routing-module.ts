import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home-module').then(m => m.HomeModule)
      },
      {
        path: 'cases',
        loadChildren: () =>
          import('./features/cases/cases-module').then(m => m.CasesModule)
      },
      {
        path: 'request',
        loadChildren: () =>
            import('./features/request/request-module').then(m => m.RequestModule)
       },
       {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth-module').then(m => m.AuthModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}