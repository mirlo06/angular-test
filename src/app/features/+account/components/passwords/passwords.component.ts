import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-passwords',
  template: `
    <div *ngIf="form" [formGroup]="form">
      <div formGroupName="password">
        <mat-form-field>
          <input type="password" formControlName="password1"
          matInput required autocomplete="off" placeholder="Votre mot de passe" i18n-placeholder>
          <mat-error i18n>Le mot de passe est obligatoire</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input type="password" formControlName="password2"
          matInput autocomplete="off" placeholder="Confirmez-le" i18n-placeholder>
        </mat-form-field>
      </div>
    </div>
  `,
  styleUrls: ['./passwords.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordsComponent implements OnInit {

  @Input() form?: FormGroup;

  get group(): FormGroup | null {
    return this.form?.get('password') as FormGroup | null;
  }

  get password1(): FormControl | null {
    return this.group?.get('password1') as FormControl | null;
  }

  get password2(): FormControl | null {
    return this.group?.get('password2') as FormControl | null;
  }

  constructor() {}

  ngOnInit(): void {}

}
