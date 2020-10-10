import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public user: User;

  constructor(private auth: AngularFireAuth, private router: Router){
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
}
