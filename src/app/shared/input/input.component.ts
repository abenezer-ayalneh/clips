import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({required: true}) control: FormControl = new FormControl();

  @Input() type = 'text';

  @Input() placeholder = ''

  @Input() format = ''
}
