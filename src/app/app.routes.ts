import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ClipComponent} from "./clip/clip.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/')

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    data: {
      authGuardPipe: redirectUnauthorizedToHome
    },
    loadChildren: () => import('./video/video.routes').then((routes) => routes.videoRoutes),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'clip/:id',
    component: ClipComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
