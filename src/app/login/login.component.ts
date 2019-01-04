import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder, private route: Router, private authService: AuthService) {
    this.form = fb.group({
        username: ['', [Validators.required]],
        password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.authService.setIdentity(this.form.value.username);
      this.route.navigate(['']);
    }
  }
}