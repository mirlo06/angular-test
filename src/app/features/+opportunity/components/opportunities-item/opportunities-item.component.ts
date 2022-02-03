import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Opportunity } from '../../models/opportunity.model';

@Component({
  selector: 'app-opportunities-item',
  template: `
  <article *ngIf="opportunity">
      <mat-card>
        <a [routerLink]="['../opportunity', opportunity.id]">
          <img [src]="opportunity.imgSrc" [alt]="opportunity.name" mat-card-image loading="lazy" width="412">
        </a>
        <mat-card-title><a [routerLink]="['../opportunity', opportunity.id]">{{ opportunity.name }}</a></mat-card-title>
      </mat-card>
    </article>
  `,
  styleUrls: ['./opportunities-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitiesItemComponent implements OnInit {

  @Input() opportunity?: Opportunity;

  constructor() {}

  ngOnInit(): void {}

}
