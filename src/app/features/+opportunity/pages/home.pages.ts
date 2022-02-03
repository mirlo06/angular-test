import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Opportunity } from "../models/opportunity.model";
import { OpportunityService } from "../services/opportunity.service";

@Component({
  template : `
     <div>
      <div>
        <mat-toolbar><span i18n>Opps à la une</span></mat-toolbar>
        <app-slideshow [delay]="3000" *ngIf="slides$ | async as slides; else slidesLoading">
          <app-slide *ngFor="let slide of slides">
            <app-opportunity-slide [slide]="slide" [routerLink]="['../opportunity', slide.id]"></app-opportunity-slide>
          </app-slide>
        </app-slideshow>
        <ng-template #slidesLoading>
          <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
        </ng-template>
      </div>
      <div>
        <mat-toolbar><span i18n>Tous les opps</span></mat-toolbar>
        <app-opportunity-list *ngIf="opportunities$ | async as opportunities; else moviesLoading" [opportunities]="opportunities"></app-opportunity-list>
        <ng-template #moviesLoading>
          <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
        </ng-template>
      </div>

    </div>
  `
})

export class HomePage implements OnInit{

  slides$?: Observable<Opportunity[]> ;

  opportunities$?: Observable<Opportunity[]> ;


  constructor(private opportunityService : OpportunityService){

  }

  ngOnInit(): void {

    this.slides$ = this.opportunityService.getSlides();
    this.opportunities$ = this.opportunityService.getOpportunities();
  }
}
