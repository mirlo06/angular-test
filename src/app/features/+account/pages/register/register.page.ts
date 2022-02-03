import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from '../../services/account.service';
import { RegisterRequestBody } from '../../services/requests.model';

@Component({
  template: `
    <mat-card>
      <form method="post"  (ngSubmit)="register()"  #registerForm="ngForm">
        <h1 i18n>Inscription</h1>
        <p i18n>
          Attention : il s'agit d'une app de test. E-mail et mot de passe sont stockés en clair.
        </p>
        <ul *ngIf="errors.length">
          <li *ngFor="let error of errors">{{ error }}</li>
        </ul>
        <mat-form-field>
          <input type="email" name="email"   [(ngModel)] ="formValues.email" #emailControl="ngModel"
          matInput required autocomplete="email" placeholder="Votre adresse e-mail" i18n-placeholder>
          <p *ngIf="emailControl.invalid && emailControl.dirty">Email est obligatoire</p>
        </mat-form-field>
        <mat-form-field>
          <input type="password" name="password" [(ngModel)] ="formValues.password"
          matInput required autocomplete="off" placeholder="Votre mot de passe" i18n-placeholder>
          <mat-error i18n>Le mot de passe est obligatoire</mat-error>
        </mat-form-field>
        <div>
          <p i18n>J'ai une carte :</p>
          <mat-radio-group name="card">
            <mat-radio-button value="" checked i18n>Non</mat-radio-button>
            <mat-radio-button value="ugc">UGC</mat-radio-button>
            <mat-radio-button value="gaumont">Gaumont</mat-radio-button>
          </mat-radio-group>
        </div>
        <mat-form-field>
          <mat-select name="category" placeholder="Genre de film préféré" i18n-placeholder>
            <mat-option value="" i18n>Non spécifié</mat-option>
            <mat-option value="action" i18n>Action</mat-option>
            <mat-option value="comedy" i18n>Comédie</mat-option>
            <mat-option value="drama" i18n>Drame</mat-option>
            <mat-option value="horror" i18n>Horreur</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <textarea name="profile"
          matInput cdkTextareaAutosize placeholder="A propos de vous" i18n-placeholder></textarea>
        </mat-form-field>
        <mat-form-field>
          <input type="text" name="city" [matAutocomplete]="cityAuto"
          matInput placeholder="Votre ville" i18n-placeholder autocomplete="off">
        </mat-form-field>
        <mat-autocomplete #cityAuto></mat-autocomplete>
        <div>
          <mat-checkbox name="conditions" required>
            <ng-container i18n>J'accepte les conditions d'utilisation</ng-container>. *
          </mat-checkbox>
        </div>
        <button type="submit" mat-raised-button color="accent" i18n [disabled]="registerForm.invalid">
          Valider l'inscription
        </button>
        <p class="center"><a routerLink="../login" i18n>Déjà inscrit/e ? Authentifiez-vous.</a></p>
      </form>
    </mat-card>
  `,
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {

  errors: string[] = [];

  formValues: RegisterRequestBody = {
    email : '',
    password : ''
  }

  constructor(
    private account: AccountService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  /**
   * Send form data to the API, then redirect to profile on success or display error
   */
  register(): void {

    const loading = this.snackBar.open($localize`Inscription en cours...`);

    this.account.register(this.formValues).subscribe({
      next: ({ error }) => {

        loading.dismiss();

        if (!error) {

          this.snackBar.open($localize`Inscription réussie`, $localize`OK`, { duration: 2000 });

          this.router.navigate(['/account/login']).catch(() => {});

        } else {
          this.errors = error.errors ?? [error.message];
        }

      },
      error: () => {

        loading.dismiss();

        this.errors = [$localize`Pas de connexion Internet`];

      },
    });

  }

}
