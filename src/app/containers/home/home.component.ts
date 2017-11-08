import { Component, OnInit, AfterViewInit, Inject, ViewChildren, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SortableComponent } from 'ng2-dnd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(SortableComponent) sortables: QueryList<SortableComponent>;
  private clone: HTMLElement;

  // TODO: Create HomeCardModel
  baseCards = [
    {
      title: 'Registration',
      desc: 'desc',
      more: 'dsadsadsadsad',
      expanded: true
    }, {
      title: 'Invitations',
      desc: 'desc',
      more: 'monytkuykghjhgjhgre',
      expanded: true
    }, {
      title: 'Mislaka',
      desc: 'desc',
      more: 'mweqwewqeqewqore',
      expanded: true
    }, {
      title: 'Events',
      desc: 'desc',
      more: 'moiuyiyiyre',
      expanded: true
    }, {
      title: 'Partners',
      desc: 'desc',
      more: 'morewqewqee',
      expanded: true
    }];

  constructor( @Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const appRoot = this.document.getElementById('app-root');
    this.sortables.forEach((ref) => {
      ref._elem.addEventListener('dragstart', (event) => {
        this.clone = <HTMLElement>event.srcElement.cloneNode(true);
        // this.clone.classList.remove('dnd-sortable-drag');
        this.clone.classList.add('dnd-drag-clone');
        appRoot.appendChild(this.clone);
        event.dataTransfer.setDragImage(this.clone, 0, 0);
      }, false);

      ref._elem.addEventListener('dragend', (event) => {
        appRoot.removeChild(this.clone);
      });
    });
  }

  handleDragStart(event) {
    // Collapse all cards
    this.baseCards.forEach(card => {
      card.expanded = false;
    });

  }

  handleDragEnd(event) {
    // Expend all cards
    this.baseCards.forEach(card => {
      card.expanded = true;
    });
  }

}
