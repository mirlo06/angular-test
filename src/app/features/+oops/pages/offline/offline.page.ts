import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <mat-card>
      <mat-card-title i18n>Mode hors ligne</mat-card-title>
      <mat-card-content>
        <p i18n>Cette page nécessite une connexion Internet.</p>
        <p *ngIf="isAuthenticated"><a routerLink="/account/profile" i18n>Accéder à vos réservations</a></p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./offline.page.css'],
})
export class OfflinePage implements OnInit {

  isAuthenticated = false;

  constructor() {}

  ngOnInit(): void {}

}
