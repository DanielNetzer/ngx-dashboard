import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // TODO: Create HomeCardModel
  baseCards = [{
    title: 'Mislaka',
    desc: 'desc',
    more: 'more',
    expanded: true
  },
  {
    title: 'Registration',
    desc: 'desc',
    more: 'more',
    expanded: true
  }, {
    title: 'Invitations',
    desc: 'desc',
    more: 'more',
    expanded: true
  }, {
    title: 'Mislaka',
    desc: 'desc',
    more: 'more',
    expanded: true
  }, {
    title: 'Events',
    desc: 'desc',
    more: 'more',
    expanded: true
  }, {
    title: 'Partners',
    desc: 'desc',
    more: 'more',
    expanded: true
  }];

  constructor() { }

  ngOnInit() {
  }

  handleDragStart() {
    // Collapse all cards
    this.baseCards.forEach(card => {
      card.expanded = false;
    });
  }

  handleDragEnd() {
    // Expend all cards
    this.baseCards.forEach(card => {
      card.expanded = true;
    });
  }

}
