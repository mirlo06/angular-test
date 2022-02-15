import { Component, OnInit } from "@angular/core";
import {  BehaviorSubject, map, Observable, switchMap } from "rxjs";
import { Opportunity } from "../../models/opportunity.model";
import { OpportunityService } from "../../services/opportunity.service";

@Component({

template : `

<div class="container-lg">
  <mat-toolbar><span i18n>Opportunities</span></mat-toolbar>
  <app-cards [opportunities]="opportunities"></app-cards>
  <button [disabled]="loadMore" mat-raised-button (click)="loadOportunities()" color="primary">
    Load More
  </button>

  <ng-container *ngIf="loading">
    <div class="center">
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    </div>
  </ng-container>
</div>


`,
styleUrls : ['opportunities.page.scss']


})

export class OpportunitiesPage implements OnInit {

  offset: number = 0;
  limit: number = 12;

  loadMore:boolean=false;

  opportunities: Opportunity[] = [];

  loading = false;

  constructor(private opportunityService: OpportunityService) {}

  ngOnInit(): void {
    this.loadOportunities();
  }

  loadOportunities(): void {
    if (this.loading) return;
    this.loading = true;
    this.loadMore= true;
     this.opportunityService
      .getSeacrhOpportunities(this.offset, this.limit)
      .subscribe({
        next: (newOpps) => {
          this.opportunities = this.opportunities.concat(newOpps);
          this.offset += this.limit;
        },
        error: (err) => {
          console.log(err);
          //Error handling
        },
        complete: () => (this.loading = false, this.loadMore= false),
      });
  }
}
