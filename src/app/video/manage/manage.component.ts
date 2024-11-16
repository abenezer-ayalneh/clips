import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  videoOrder: 'asc' | 'desc' = 'asc'

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParamMap.subscribe({
      next: (params) => {
        this.videoOrder = params.get('sort') === 'desc' ? 'desc' : 'asc';
      }
    })
  }

  sort(event: Event) {
    const {value} = (event.target as HTMLSelectElement)

    this.router.navigate([],{
      relativeTo: this.activatedRoute,
      queryParams: {
        sort: value
      },
    })
  }
}
