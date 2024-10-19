import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {InputComponent} from "../../shared/input/input.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    InputComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  nameFormControl = new FormControl('', {validators: [Validators.required, Validators.minLength(2)]})
  emailFormControl = new FormControl('', {validators: [Validators.required, Validators.email]})
  ageFormControl = new FormControl('', {validators: [Validators.required, Validators.min(3), Validators.max(120)]})
  passwordFormControl = new FormControl('', {validators: [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]})
  confirmPasswordFormControl = new FormControl('', {validators: [Validators.required]})
  phoneNumberFormControl = new FormControl('', {validators: [Validators.required, Validators.minLength(14), Validators.maxLength(14)]})

  registerForm = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    age: this.ageFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
    phoneNumber: this.phoneNumberFormControl,
  })

  register() {
    console.log({registerForm: this.registerForm.value})
  }
}
