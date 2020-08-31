import { AuthService } from './../../share/firestore/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: [ './panel-login.component.scss' ]
})
export class PanelLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.authService
      .loginUser(email, password)
      .then(() => {
        this.router.navigate([ 'panel', 'landing' ]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
