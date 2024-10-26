import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AlertComponent} from "../../shared/alert/alert.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showAlert = false

  alertMessage = ''

  alertColor = 'blue'

  isSubmitting = false

  credentials = {
    email: '',
    password: '',
  }

  constructor(
    private readonly angularFireAuth: AngularFireAuth,
  ) {
  }

  async login() {
    this.showAlert = true
    this.alertMessage = 'Please wait. We are logging you in.'
    this.alertColor = 'blue'
    this.isSubmitting = true

    try {
      await this.angularFireAuth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
    } catch (e) {
      console.error(e)

      this.alertMessage = 'An unexpected error has occurred. Please try again later.'
      this.alertColor = 'red'
      this.isSubmitting = false

      return
    }

    this.alertMessage = 'Successfully logged in'
    this.alertColor = 'green'
  }
}
