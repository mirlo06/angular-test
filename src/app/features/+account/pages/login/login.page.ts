import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from '../../services/account.service';
import { LoginRequestBody } from '../../services/requests.model';

@Component({
  template: `
    <mat-card>
      <form method="post" (ngSubmit)="login()" #form="ngForm">
        <h1 i18n>Authentification</h1>
        <ul *ngIf="errors.length">
          <li *ngFor="let error of errors">{{ error }}</li>
        </ul>
        <mat-form-field>
          <input type="email" name="username" [(ngModel)] = "formValues.username"
          matInput required autocomplete="username" placeholder="Votre adresse e-mail ou pseudo" i18n-placeholder>
          <mat-error i18n>L'e-mail ou pseudo est obligatoire</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input type="password" name="password" [(ngModel)] = "formValues.password"
          matInput required autocomplete="off" placeholder="Votre mot de passe" i18n-placeholder>
          <mat-error i18n>Le mot de passe est obligatoire</mat-error>
        </mat-form-field>
        <button type="submit" mat-raised-button color="accent" i18n>S'authentifier</button>
        <p class="center"><a routerLink="../register" i18n>Pas encore inscrit/e ? Créez un compte.</a></p>
      </form>
    </mat-card>
  `,
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

formValues:LoginRequestBody = {
  username : '',
  password : ''
}

  errors: string[] = [];

  constructor(private accountService: AccountService , private router:Router) {}

  ngOnInit(): void {}

  login():void {

    this.accountService.login(this.formValues).subscribe((data) => {
      if(!data.error){
        this.router.navigate(['/']).catch(() => {});
      }
    });
  }

}

