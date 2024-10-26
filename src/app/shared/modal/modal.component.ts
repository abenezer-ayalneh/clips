import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input({required: true}) modalID!: string;

  constructor(
    protected readonly modalService: ModalService,
    private readonly elementRef: ElementRef,
  ) {
  }

  ngOnInit(): void {
    // This is like the portal feature in React.js. This line
    // will move this component to the document's body tag.
    // That means it will be on the same level as the root app component.
    document.body.appendChild(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    // This will manually remove the element from the document's body
    // when angular destroys this component.
    document.body.removeChild(this.elementRef.nativeElement)
  }

  closeModal() {
    this.modalService.toggleModal(this.modalID)
  }
}
