import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'accounts',
    loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
