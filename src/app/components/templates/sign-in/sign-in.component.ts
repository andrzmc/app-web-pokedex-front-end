import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication/authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginForm = new FormGroup({
    email : new FormControl(undefined, [Validators.email]),
    password : new FormControl(undefined, [Validators.minLength(6)])
  });

  public error: boolean;
  public errorMessage: string;

  constructor( private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.error = false;
    this.errorMessage = '';
  }

  public onSubmit(): void {
    const email = this.loginForm.controls.email;
    const password = this.loginForm.controls.password;

    if (!email.value || !password.value) {
      this.error = true;
      this.errorMessage = `¡Oops! Los campos son obligatorios :(`;
      return;
    }

    if (email.status === 'INVALID') {
      this.error = true;
      this.errorMessage = `No es un correo válido`;
      return;
    }

    if (password.status === 'INVALID') {
      this.error = true;
      this.errorMessage = `Una contraseña debe tener por lo menos 6 caracteres`;
      return;
    }

    this.error = false;

    this.authService.Login(email.value, password.value);

  }

}
