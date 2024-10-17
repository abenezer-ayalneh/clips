import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Input({required: true}) tabTitle!: string;

  @Input() active: boolean = false;
}
