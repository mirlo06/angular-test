import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from '../../services/account.service';
import { LoginRequestBody } from '../../services/requests.model';

@Component({
  template: `
    <mat-card>
      <form method="post">
        <h1 i18n>Authentification</h1>
        <ul *ngIf="errors.length">
          <li *ngFor="let error of errors">{{ error }}</li>
        </ul>
        <app-email></app-email>
        <mat-form-field>
          <input type="password" name="password"
          matInput required autocomplete="off" placeholder="Votre mot de passe" i18n-placeholder>
          <mat-error i18n>Le mot de passe est obligatoire</mat-error>
        </mat-form-field>
        <button type="submit" mat-raised-button color="accent" i18n>S'authentifier</button>
        <p class="center"><a routerLink="../register" queryParamsHandling="preserve" i18n>
          Pas encore inscrit/e ? Créez un compte.
        </a></p>
      </form>
    </mat-card>
  `,
  styleUrls: ['./login-reactive.page.css'],
})
export class LoginReactivePage implements OnInit {

  errors: string[] = [];

  constructor() {}

  ngOnInit(): void {}

}
