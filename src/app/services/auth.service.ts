import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IUser from "../models/user.model";
import {filter, Observable, switchMap} from "rxjs";
import {delay, map} from "rxjs/operators";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$: Observable<boolean>;
  isAuthenticatedWithDelay$: Observable<boolean>;
  private usersCollection: AngularFirestoreCollection<IUser>;
  private redirect: boolean = false

  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly angularFireStore: AngularFirestore,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.usersCollection = this.angularFireStore.collection('users');
    this.isAuthenticated$ = this.angularFireAuth.user.pipe(
      map((user) => Boolean(user)),
    )
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;

          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data)
      ).subscribe({
      next: (routeData) => {
        console.log(routeData)
        this.redirect = routeData['authOnly'] ?? false;
      }
    })
  }

  async createUser(userData: IUser) {
    if (!userData.password) {
      throw Error("Passwords not provided!");
    }

    const userCredential = await this.angularFireAuth.createUserWithEmailAndPassword(userData.email as string, userData.password as string)

    if (!userCredential.user) {
      throw Error("User can not be found!");
    }

    await this.usersCollection.doc(userCredential.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    })

    await userCredential.user.updateProfile({
      displayName: userData.name,
    })
  }


  async logout($event?: Event) {
    $event?.preventDefault()
    await this.angularFireAuth.signOut()

    if (this.redirect) {
      await this.router.navigateByUrl('/')
    }
  }
}
