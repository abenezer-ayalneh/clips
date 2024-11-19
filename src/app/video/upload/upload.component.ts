import { Component } from '@angular/core';
import {EventBlockerDirective} from "../../shared/directives/event-blocker.directive";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    EventBlockerDirective,
    NgClass
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  isDraggingOverElement = false;

  setIsDraggingOverElement(value: boolean) {
    this.isDraggingOverElement = value
  }

  storeFile(event: Event) {
    this.setIsDraggingOverElement(false)


  }
}
