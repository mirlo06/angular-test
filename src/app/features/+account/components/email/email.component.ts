import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  template: `
    <div *ngIf="form" [formGroup]="form">
      <mat-form-field>
        <input type="email" formControlName="email" matInput required autocomplete="email"
        placeholder="Votre adresse e-mail" i18n-placeholder>
        <mat-error i18n>L'e-mail est obligatoire</mat-error>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./email.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComponent implements OnInit {

  @Input() form?: FormGroup;

  constructor() {}

  ngOnInit(): void {}

}
