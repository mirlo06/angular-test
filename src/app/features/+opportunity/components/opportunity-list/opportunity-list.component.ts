import { Component, OnInit, ChangeDetectionStrategy, Input, TrackByFunction } from '@angular/core';
import { Opportunity } from '../../models/opportunity.model';

@Component({
  selector: 'app-opportunity-list',
  template: `
     <div class="app-opportunity-list">
      <app-opportunities-item *ngFor="let opp of opportunities; trackBy: trackBy" [opportunity]="opp"></app-opportunities-item>
    </div>
  `,
  styleUrls: ['./opportunity-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunityListComponent implements OnInit {

  @Input() opportunities: Opportunity[] = [];

  constructor() {}

  ngOnInit(): void {}

  get trackBy():TrackByFunction<Opportunity> {
    return (index , opp) => opp.id;
  }

}
