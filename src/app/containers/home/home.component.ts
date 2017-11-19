import { Component, OnInit, Renderer2 } from '@angular/core';

import { MatExpansionPanel } from '@angular/material';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardsExpanded = true;
  // TODO: Create HomeCardModel
  baseCardsColumns = [
    [{
      title: 'Registration',
      icon: 'ion-person',
      more: 'dsadsadsadsad',
      expanded: true,
      state: true,
      dragged: false,
      hovered: false
    }, {
      title: 'Invitations',
      icon: 'ion-person-stalker',
      more: 'monytkuykghjhgjhgre',
      expanded: true,
      state: true,
      dragged: false,
      hovered: false
    }, {
      title: 'Mislaka',
      icon: 'ion-card',
      more: 'mweqwewqeqewqore',
      expanded: true,
      state: true,
      dragged: false,
      hovered: false
    }],
    [{
      title: 'Events',
      icon: 'ion-beer',
      more: 'moiuyiyiyre',
      expanded: true,
      state: true,
      dragged: false,
      hovered: false
    }, {
      title: 'Partners',
      icon: 'ion-briefcase',
      more: 'morewqewqee',
      expanded: true,
      state: true,
      dragged: false,
      hovered: false
    }],
    [{
      title: 'News',
      icon: 'ion-ios-list',
      more: 'morewqewqee',
      expanded: true,
      state: true,
      dragged: false,
      hovered: false
    }]
  ];

  constructor(private dragulaService: DragulaService, private renderer: Renderer2) {

    this.dragulaService
      .setOptions('bag-one', {
        moves: this.isCardDraggable
      });

    dragulaService.drag.subscribe((value) => {
      this.onDragDragula(value.slice(1));
    });
    dragulaService.dragend.subscribe((value) => {
      this.onDragEnd(value.slice(1));
    });

    dragulaService.drop.subscribe((value) => {
      this.onDragEnd(value.slice(1));
    });
  }

  ngOnInit() {
  }


  //#region Private Methods
  private isCardDraggable(el, source, handle, sibling): boolean {
    return handle.hasAttribute('draggable');
  }

  private onDragDragula(args): void {
    const [e, el] = args;
    // collapse all cards
    this.baseCardsColumns.forEach(col => {
      col.forEach(card => {
        card.expanded = false;
      });
    });

    this.cardsExpanded = false;
  }

  private onDragEnd(args): void {
    const [e, el] = args;
    // expand all cards
    this.baseCardsColumns.forEach(col => {
      col.forEach(card => {
        card.expanded = true;
      });
    });

    this.cardsExpanded = true;
  }

  //#endregion

  //#region Public Methods
  public cardEmboss(i: number, j: number): void {
    if (this.baseCardsColumns[i][j].hovered) {
      this.baseCardsColumns[i][j].hovered = false;
    } else {
      this.baseCardsColumns[i][j].hovered = true;
    }
  }
  //#endregion
}
