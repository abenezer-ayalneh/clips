import {Routes} from "@angular/router";
import {ManageComponent} from "./manage/manage.component";
import {UploadComponent} from "./upload/upload.component";

export const videoRoutes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    data: {
      authOnly: true
    }
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: {
      authOnly: true
    }
  }
]
