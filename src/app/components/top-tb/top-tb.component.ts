import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-tb',
  templateUrl: './top-tb.component.html',
  styleUrls: ['./top-tb.component.scss']
})
export class TopTbComponent {

  @Output() toggleSideNav: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  toggleSideNavEmitter(): void {
    this.toggleSideNav.emit(true);
  }

}
