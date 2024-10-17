import { Component } from '@angular/core';
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(
    private readonly modalService: ModalService,
  ) {
  }

  openModal(event: Event) {
    event.preventDefault()

    this.modalService.toggleModal('auth')
  }
}
