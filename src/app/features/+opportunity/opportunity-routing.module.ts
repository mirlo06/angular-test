import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home.pages';
import { OpportunitiesPage } from './pages/opportunities/opportunities.page';

const routes: Routes = [
  { path: '', children: [
    { path: '', component: HomePage },
    { path: 'opportunities', component: OpportunitiesPage }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule { }
