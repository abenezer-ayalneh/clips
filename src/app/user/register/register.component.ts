import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {InputComponent} from "../../shared/input/input.component";
import {AlertComponent} from "../../shared/alert/alert.component";
import {AuthService} from "../../services/auth.service";
import IUser from "../../models/user.model";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    InputComponent,
    AlertComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  showAlert = false

  alertMessage = ''

  alertColor = 'blue'

  isSubmitting = false

  nameFormControl = new FormControl('', {validators: [Validators.required, Validators.minLength(2)]})
  emailFormControl = new FormControl('', {validators: [Validators.required, Validators.email]})
  ageFormControl = new FormControl<number | null>(null, {validators: [Validators.required, Validators.min(3), Validators.max(120)]})
  passwordFormControl = new FormControl('', {validators: [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]})
  confirmPasswordFormControl = new FormControl('', {validators: [Validators.required]})
  phoneNumberFormControl = new FormControl('', {validators: [Validators.required, Validators.minLength(13), Validators.maxLength(13)]})
  registerForm = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    age: this.ageFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
    phoneNumber: this.phoneNumberFormControl,
  })

  constructor(
    private readonly authService: AuthService,
  ) {
  }

  async register() {
    this.showAlert = true
    this.alertMessage = 'Please wait. Your account is being created.'
    this.alertColor = 'blue'
    this.isSubmitting = true

    try {
      await this.authService.createUser(this.registerForm.value as IUser)
    } catch (e) {
      console.error(e)

      this.alertMessage = 'An unexpected error has occurred. Please try again later.'
      this.alertColor = 'red'
      this.isSubmitting = false
      return
    }

    this.alertMessage = 'Success! Your account has been created!'
    this.alertColor = 'green'
  }
}
