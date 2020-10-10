import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

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
