import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  public registerForm = new FormGroup({
    email : new FormControl(undefined, [Validators.email]),
    password : new FormControl(undefined, [Validators.minLength(6)]),
    passwordConfirm: new FormControl(undefined, [Validators.minLength(6)])
  });

  public error: boolean;
  public errorMessage: string;

  constructor( private authService: AuthenticationService ) { }

  ngOnInit(): void {
    this.error = false;
    this.errorMessage = '';
  }

  public onSubmit(): void {
    const email = this.registerForm.controls.email;
    const password = this.registerForm.controls.password;
    const passwordConfirm = this.registerForm.controls.passwordConfirm;

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

    if (password.value !== passwordConfirm.value) {
      this.error = true;
      this.errorMessage = `Las contraseñas no coinciden`;
      return;
    }

    this.error = false;

    this.authService.Register(email.value, password.value).then(
      result => {
        if (result.status !== 200) {
          this.error = true;
          this.errorMessage = result.message;
        }
      }
    );

  }

}
