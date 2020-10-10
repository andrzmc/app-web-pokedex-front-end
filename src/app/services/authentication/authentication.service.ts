import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public user: User;

  constructor(private auth: AngularFireAuth, private router: Router) { 
    this.auth.authState.subscribe(user => {
      if (user){
        this.user = user;
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/main']);
      } else {
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/']);
      }
    });
  }

  async Login(email: string, password: string): Promise<void> {
    await this.auth.signInWithEmailAndPassword(email, password);
  }

}
