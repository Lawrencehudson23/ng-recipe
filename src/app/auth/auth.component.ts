import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  authForm: FormGroup;
  error: string = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    // console.log( this.authForm );
    if (this.authForm.invalid) {
      return;
    }
    const { email, password } = this.authForm.value;

    this.isLoading = true;
    // NOTE: Check if it is login or register
    if (this.isLoginMode) {
      // ...
      console.log('try to submit login');
    } else {
      this.authService.signUp(email, password).subscribe(
        (resData) => {
          console.log('resData: ', resData);
          this.isLoading = false;
        },
        (errorMessage) => {
          console.log('error: ', errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }

    this.authForm.reset();
  }
}
