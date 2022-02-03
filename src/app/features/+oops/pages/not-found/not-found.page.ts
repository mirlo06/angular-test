import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <mat-card>
      <mat-card-title i18n>Page introuvable</mat-card-title>
      <mat-card-content>
        <p i18n>La page que vous recherchez n'existe pas.</p>
        <p><a routerLink="/" i18n>Revenir à la page d'accueil</a></p>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./not-found.page.css'],
})
export class NotFoundPage implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
