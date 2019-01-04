import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private authService: AuthService) {

  }

  ngOnInit() {
      this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
  });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.setIdentity(this.loginForm.value.username);
      this.route.navigate(['operations']);
    }
  }
}