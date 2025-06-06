import {Component} from '@angular/core';
import {EventBlockerDirective} from "../../shared/directives/event-blocker.directive";
import {NgClass} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../shared/input/input.component";

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    EventBlockerDirective,
    NgClass,
    ReactiveFormsModule,
    InputComponent
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  isDraggingOverElement = false;

  file: File | null = null;

  nextStep: boolean = false;

  uploadFormGroup = new FormGroup({
    title: new FormControl<string>('', {validators: [Validators.required, Validators.minLength(3 )], nonNullable: true}),
  })

  setIsDraggingOverElement(value: boolean) {
    this.isDraggingOverElement = value
  }

  storeFile(event: Event) {
    this.setIsDraggingOverElement(false)

    this.file = (event as DragEvent).dataTransfer?.files.item(0) ?? null;

    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }

    this.nextStep = true

    this.uploadFormGroup.controls.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''))

    console.log({file: this.file})
  }

  publishFormSubmit() {
    if (this.uploadFormGroup.valid) {
      console.log({formData: this.uploadFormGroup.value})
    }
  }
}
