import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <mat-toolbar color="primary">
    <a routerLink="" routerLinkActive="nav-active">
        <mat-icon>home</mat-icon>
        <ng-container i18n>Home</ng-container>
      </a>
      <a routerLink="/opportunities" routerLinkActive="nav-active">
        <mat-icon>movie</mat-icon>
        <ng-container i18n>Opportunités</ng-container>
      </a>
      <a routerLink="/institutions" routerLinkActive="nav-active">
        <mat-icon>theaters</mat-icon>
        <ng-container i18n>Institutions</ng-container>
      </a>
      <a *ngIf="isAuthenticated" routerLink="/account/profile" routerLinkActive="nav-active">
        <mat-icon [matBadge]="reservationsCountBadge" matBadgePosition="above before"
        matBadgeColor="accent" matBadgeSize="small">event</mat-icon>
        <ng-container i18n>Mes opps</ng-container>
      </a>
      <a *ngIf="!isAuthenticated" routerLink="/account/login" routerLinkActive="nav-active">
        <mat-icon>account_circle</mat-icon>
        <ng-container i18n>Compte</ng-container>
      </a>
    </mat-toolbar>
  `,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {

  @Input() isAuthenticated?: boolean | null = false;
  @Input() reservationsCount?: number | null = 0;

  get reservationsCountBadge(): string | undefined {
    return this.reservationsCount?.toString();
  }

  constructor() {}

  ngOnInit(): void {}

}
