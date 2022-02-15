import { Component, OnInit, ChangeDetectionStrategy, Input, TrackByFunction } from '@angular/core';
import { Opportunity } from '../../models/opportunity.model';

@Component({
  selector: 'app-cards',
  template: `
   <div class="app-card-list row">
      <app-card-item class="col-md-3" *ngFor="let opp of opportunities; trackBy: trackBy" [opportunity]="opp"></app-card-item>
    </div>
  `,
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {


  @Input() opportunities: Opportunity[] = [];

  constructor() {}

  ngOnInit(): void {}

  get trackBy():TrackByFunction<Opportunity> {
    return (index , opp) => opp.id;
  }





}
