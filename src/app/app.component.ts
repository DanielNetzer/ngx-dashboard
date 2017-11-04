import { Component, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';

import { Router, RouterEvent } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mediafy';

  @ViewChild('sidenav') sideNav: MatSidenav;

  constructor(private router: Router) {
    router.events.filter(e => e instanceof RouterEvent).subscribe((e: RouterEvent) => {
      this.sideNav.close();
    }, (err) => {
      console.log(err);
    });
  }

  toggleSideNav(): void {
    this.sideNav.toggle();
  }
}
