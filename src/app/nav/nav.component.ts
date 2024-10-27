import {Component} from '@angular/core';
import {ModalService} from "../services/modal.service";
import {AuthService} from "../services/auth.service";
import {AsyncPipe} from "@angular/common";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(
    private readonly modalService: ModalService,
    private readonly angularFireAuth: AngularFireAuth,
    protected readonly authService: AuthService,
  ) {
  }

  openModal($event: Event) {
    $event.preventDefault()

    this.modalService.toggleModal('auth')
  }

  async logout($event: Event) {
    $event.preventDefault()
    await this.angularFireAuth.signOut()
  }
}
