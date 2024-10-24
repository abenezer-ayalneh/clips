import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {environment} from "./environments/environment";
import {enableProdMode} from "@angular/core";

if (environment.production) {
  enableProdMode()
}

let appInit = false

firebase.initializeApp(environment.firebaseConfig)

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    bootstrapApplication(AppComponent, appConfig)
      .catch((err) => console.error(err));
  }

  appInit = true
})

