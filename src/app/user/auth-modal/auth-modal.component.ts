import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.modalService.register('auth')
  }

  ngOnDestroy(): void {
    this.modalService.unregister('auth')
  }

}
