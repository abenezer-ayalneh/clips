import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-clip',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.scss'
})
export class ClipComponent implements OnInit {
  id: string = ''

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id']
      }
    })
  }
}
