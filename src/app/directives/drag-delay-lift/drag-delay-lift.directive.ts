import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragDelayLift]'
})
export class DragDelayLiftDirective {

  dragDelay = 2000; // milliseconds
  draggable = false;
  touchTimeout: any;

  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  onMove(e: Event) {
    if (!this.draggable) {
      e.stopPropagation();
      clearTimeout(this.touchTimeout);
    }
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onDown(e: Event) {
    this.touchTimeout = setTimeout(() => {
      this.draggable = true;
    }, this.dragDelay);
  }

  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  onUp(e: Event) {
    clearTimeout(this.touchTimeout);
    this.draggable = false;
  }

  constructor(private el: ElementRef) { }

}
