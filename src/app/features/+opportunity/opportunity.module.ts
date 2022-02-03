import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { HomePage } from './pages/home.pages';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SlideshowModule } from '@core/slideshow';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OpportunitySlideComponent } from './components/opportunity-slide/opportunity-slide/opportunity-slide.component';
import { OpportunityListComponent } from './components/opportunity-list/opportunity-list.component';
import { OpportunitiesItemComponent } from './components/opportunities-item/opportunities-item.component';


@NgModule({
  declarations: [
    HomePage,
    OpportunitySlideComponent,
    OpportunityListComponent,
    OpportunitiesItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    SlideshowModule,
    OpportunityRoutingModule
  ]
})
export class OpportunityModule { }
