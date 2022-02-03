import { Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { Observable } from 'rxjs';

import { Auth } from '@core/auth';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header [isAuthenticated]="isAuthenticated$ | async" [reservationsCount]="reservationsCount$"></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated$?: Observable<boolean>;
  reservationsCount$?: number;

  constructor(
    protected network: Network,
    private auth: Auth,
  ) {}

  ngOnInit(): void {

    this.isAuthenticated$ = this.auth.isAuthenticated;

    this.reservationsCount$ = 0;

  }

}
