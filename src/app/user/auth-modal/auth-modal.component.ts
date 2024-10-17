import { Component } from '@angular/core';
import {ModalComponent} from "../../shared/modal/modal.component";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent {

  constructor(
    private readonly modalService: ModalService,
  ) {
    this.modalService.register('auth')
  }

}
