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

  async Login(email: string, password: string): Promise<void> {
    await this.auth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/main']);
  }

  async Logout(): Promise<void>{
    await this.auth.signOut();
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  } 

}
