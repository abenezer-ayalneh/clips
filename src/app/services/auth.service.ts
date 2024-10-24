import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IUser from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;

  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly angularFireStore: AngularFirestore,
  ) {
    this.usersCollection = this.angularFireStore.collection('users');
  }

  async createUser(userData: IUser) {
    if(!userData.password){
      throw Error("Passwords not provided!");
    }

    const userCredential = await this.angularFireAuth.createUserWithEmailAndPassword(userData.email as string, userData.password as string)

    if(!userCredential.user){
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
}
