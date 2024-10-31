import {Routes} from "@angular/router";
import {ManageComponent} from "./manage/manage.component";

export const videoRoutes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    data: {
      authOnly: true
    }
  }
]
