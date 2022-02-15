import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header">
      <!-- <div class="app-header-logo">
        <img src="assets/logo.png" alt="Cinemapp" i18n-alt width="60" height="60">
      </div> -->
      <app-menu [isAuthenticated]="isAuthenticated" [reservationsCount]="reservationsCount"></app-menu>
    </header>
  `,
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated?: boolean | null = false;
  @Input() reservationsCount?: number | null = 0;

  constructor() {}

  ngOnInit(): void {}

}
