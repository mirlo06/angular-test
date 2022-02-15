import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  template: `
     <mat-toolbar fxLayout="row" color="primary">
    <span fxFlex>Test</span>
    <a routerLink={{item.url}} routerLinkActive="nav-active" *ngFor="let item of menuItems"
        [fxShow]="item.showOnDesktop"
        [fxShow.xs]="item.showOnMobile"
        [fxShow.sm]="item.showOnTablet">
        <mat-icon class="mr">{{item.icon}}</mat-icon>
        {{item.label}}
</a>
    <ng-container>
        <button mat-icon-button [matMenuTriggerFor]="dropMenu" [fxShow]="false"
        [fxShow.xs]="true"
        [fxShow.sm]="false">
            <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #dropMenu="matMenu">

                <div *ngFor="let item of menuItems" [fxShow]="!item.showOnDesktop"
                     [fxShow.sm]="!item.showOnTablet"
                     [fxShow.xs]="!item.showOnMobile">
                     <a *ngIf="item.profile" routerLink={{item.url}} routerLinkActive="nav-active">
                     <mat-icon [matBadge]="reservationsCountBadge" matBadgePosition="above before"
                           matBadgeColor="accent" matBadgeSize="small">event</mat-icon>
                      <ng-container i18n> {{item.label}}</ng-container>
                    </a>
                    <a *ngIf="!item.profile" routerLink={{item.url}} routerLinkActive="nav-active">
                      <mat-icon>{{item.icon}}</mat-icon>
                      <ng-container i18n> {{item.label}}</ng-container>
                    </a>
                    <mat-divider></mat-divider>
                </div>
        </mat-menu>
    </ng-container>
</mat-toolbar>


  `,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {

  @Input() isAuthenticated?: boolean | null = false;
  @Input() reservationsCount?: number | null = 0;

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      url: ""
    },
    {
      label: 'Opportunités',
      icon: 'movie',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      url: "/opportunities"
    },
    {
      label: 'Institutions',
      icon: 'theaters',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      url: "/institutions"
    }
  ];

  menuProfile:MenuItem = {
      label: 'Mes opps',
      icon: 'theaters',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      profile: true,
      url: "/account/profile"
  }

  menuLogin:MenuItem = {
    label: 'Compte',
    icon: 'account_circle',
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true,
    url: "/account/login"
}


  get reservationsCountBadge(): string | undefined {
    return this.reservationsCount?.toString();
  }

  constructor() {}

  ngOnInit(): void {

    if(this.isAuthenticated){
      this.menuItems.push(this.menuProfile);
    }else {
      this.menuItems.push(this.menuLogin);
    }
  }

}


export interface MenuItem {
  label: string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
  url: string;
  profile?: boolean
}
