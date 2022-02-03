import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Opportunity } from '../../../models/opportunity.model';

@Component({
  selector: 'app-opportunity-slide',
  template: `
    <picture *ngIf="slide">
      <source [srcset]="slide.imgSrcFull" media="(min-width: 960px)">
      <source [srcset]="slide.imgSrc" media="(max-width: 959px)">
      <img [src]="slide.imgSrcFull" [alt]="slide.name">
    </picture>
  `,
  styleUrls: ['./opportunity-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitySlideComponent implements OnInit {

  @Input() slide?: Opportunity;

  constructor() {}

  ngOnInit(): void {}

}
