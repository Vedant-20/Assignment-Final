// custom-modal.component.ts
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  @ViewChild('modalTitle', { static: true }) modalTitle: ElementRef | undefined;
@ViewChild('container', { static: true }) container: ElementRef | undefined;
  @Input() isOpen = false;

  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.isOpen = false;
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
