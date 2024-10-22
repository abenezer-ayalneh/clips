import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideEnvironmentNgxMask} from "ngx-mask";
import {environment} from "../environments/environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from '@angular/fire/auth';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
    provideFirestore(() => getFirestore()),
  ]
};
