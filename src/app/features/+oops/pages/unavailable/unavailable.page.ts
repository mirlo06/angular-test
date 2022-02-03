import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <mat-card>
      <mat-card-title i18n>Service inaccessible</mat-card-title>
      <mat-card-content>
        <p i18n>Le service est momentanément indisponible. Merci de réessayer ultérieurement.</p>
        <p *ngIf="isAuthenticated">
          <a routerLink="/account/profile" i18n>Accéder à vos réservations</a>
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./unavailable.page.css'],
})
export class UnavailablePage implements OnInit {

  isAuthenticated = false;

  constructor() {}

  ngOnInit(): void {}

}
