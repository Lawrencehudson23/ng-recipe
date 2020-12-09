import { PlaceHolderDirective } from './../shared/placeholder/placeholder.directive';
import { AlertComponent } from './../shared/alert/alert.component';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  authForm: FormGroup;
  error: string = null;
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;
  closeSub: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    // NOTE: Check if it is login or register
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log('resData: ', resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log('error: ', errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }
  onHandleError(): void {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
