import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Opportunity } from '../../models/opportunity.model';

@Component({
  selector: 'app-card-item',
  template: `
        <mat-card *ngIf="opportunity" class="mt-3 mb-2" cascade="true" wider="true">
      <mat-card-header>
        <mat-card-title><a  [routerLink]="['/opportunity', opportunity.id]"><h4 class="link-secondary">
          {{(opportunity.name.length>75)? (opportunity.name | slice:0:75)+'..':(opportunity.name)}}</h4></a></mat-card-title>
        <mat-card-subtitle><a [routerLink]="['/opportunity', opportunity.id]"> {{opportunity.provider.name}}</a></mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="{{opportunity.imgSrcFull}}" alt="{{opportunity.name}}">
     <!-- <mat-card-content>
        <p>{{opportunity.name}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>-->
    </mat-card>



  `,
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent implements OnInit {


  @Input() opportunity?: Opportunity;
  constructor() { }

  ngOnInit(): void {
  }

}
