import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public user: User;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  public checkUserStatus(): void{
    this.auth.authState.subscribe(user => {
      if (user){
        this.user = user;
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/main']);
      } else {
        sessionStorage.removeItem('user');
        this.router.navigate(['/']);
      }
    });
  }

  public Login(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password).then(
      result => {
        this.checkUserStatus();
        return {status: 200};
      },
      error => {
        switch(error.message){
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            return {status: 400, message: 'Este correo no está en el sistema'};
          case 'The password is invalid or the user does not have a password.':
            return {status: 400, message: 'La contraseña es incorrecta'};
        }
      }
    );
  }

  public Register(email: string, password: string): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password).then(
      result => {
        this.checkUserStatus();
        return { status: 200 };
      },
      error => {
        switch(error.message){
          case 'The email address is already in use by another account.':
            return {status: 400, message: 'Este correo ya existe, prueba con otro'};
        }
      }
    );
  }

  async Logout(): Promise<void>{
    await this.auth.signOut();
    sessionStorage.removeItem('user');
  } 

}
