import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, distinctUntilChanged, debounceTime, filter, switchMap, map, catchError, of } from 'rxjs';

import { AccountService } from '../../services/account.service';
import { AutocompleteService } from '../../services/autocomplete.service';
import { RegisterRequestBody } from '../../services/requests.model';

@Component({
  template: `
    <mat-card>
      <form method="post"  [formGroup] = "form" (ngSubmit)="register()">
        <h1 i18n>Inscription</h1>
        <p i18n>Attention : il s'agit d'une app de test. E-mail et mot de passe sont stockés en clair.</p>
        <app-errors [errors]="errors"></app-errors>
        <app-email [form]="form"></app-email>
        <app-passwords [form]="form"></app-passwords>
        <app-city [suggestions]="suggestions" [form]="form"></app-city>
        <button type="submit" mat-raised-button color="accent" i18n>
          Valider l'inscription
        </button>
        <p class="center"><a routerLink="../login" i18n>Déjà inscrit/e ? Authentifiez-vous.</a></p>
      </form>
    </mat-card>
  `,
  styleUrls: ['./register-reactive.page.css'],
})
export class RegisterReactivePage implements OnInit, OnDestroy {

  errors: string[] = [];

  suggestions: string[] | null = [];

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required)
    ,
    password: new FormGroup({
      password1: new FormControl('', Validators.required),
      password2: new FormControl(''),
    })
    , city: new FormControl('')
  })

  constructor(
    private account: AccountService,
    private autocomplete: AutocompleteService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  get group(): FormGroup {
    return this.form.get('password') as FormGroup;
  }

  get password1(): FormGroup | null {
    return this.group.get('password1') as FormGroup;
  }

  get password2(): FormControl | null {
    return this.group.get('password2') as FormControl;
  }

  get city(): FormControl | null {
    return this.form.get('city') as FormControl;
  }

  ngOnInit(): void {




    (this.city?.valueChanges as Observable<string>).pipe(
      filter((value) => value.length > 2),
      debounceTime(500),
      switchMap((value) => this.autocomplete.getCitySuggestions(value)),
      catchError(() => of(['errorrrr'])),
    ).subscribe((suggestions) => {
      this.suggestions = suggestions;
    })

    this.group.setValidators([() => {

      return this.password1?.value === this.password2?.value ? null : {
        passwordError: 'Error'
      };
    }])

  }

  ngOnDestroy(): void { }

  /**
   * Send form data to the API, then redirect to profile on success or display error
   */
  register(): void {

    const loading = this.snackBar.open($localize`Inscription en cours...`);

    this.account.register({ email: '', password: '' }).subscribe({
      next: ({ error }) => {

        loading.dismiss();

        if (!error) {

          this.snackBar.open($localize`Inscription réussie`, $localize`OK`, { duration: 2000 });

          this.router.navigate(['../login'], { relativeTo: this.route, queryParamsHandling: 'preserve' }).catch(() => { });

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
