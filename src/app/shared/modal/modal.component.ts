import {Component, Input} from '@angular/core';
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
export class ModalComponent {
  @Input({required: true}) modalID!: string;

  constructor(
    protected readonly modalService: ModalService,
  ) {
  }

  closeModal() {
    this.modalService.toggleModal(this.modalID)
  }
}
