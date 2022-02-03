import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/+opportunity/opportunity.module').then((m) => m.OpportunityModule) },
  { path: 'account', loadChildren: () => import('./features/+account/account.module').then((m) => m.AccountModule) },
  { path: 'oops', loadChildren: () => import('./features/+oops/oops.module').then((m) => m.OopsModule) },
  { path: '**', redirectTo: 'oops/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,enableTracing: true } )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
