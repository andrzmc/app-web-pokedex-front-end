import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss']
})
export class MenuHorizontalComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {}

  public signOut(): void {
    this.authService.Logout();
  }

}
