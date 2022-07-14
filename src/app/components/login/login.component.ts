import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { registerUser } from '../../models/registerUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showCon: string = "login";
  loginFormControl = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  registerFormControl = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private apiService: ApiService) { }

  ngOnInit() {
    this.loginService.getData().subscribe((res) => {
      console.log(res);
    })
  }
  // on click on login button
  login(): void {
    if (this.loginFormControl.valid) {
      const loginData = this.loginFormControl.value;
      this.loginService.loginUser(loginData).subscribe((response: ApiResponse) => {
        if (response.status === "SUCCESS") {
          this.apiService.openSnackBar(response.message);
          this.router.navigate(['/home']);
        }
      }, err => {
        this.apiService.openSnackBar(err.error.message);
      })
    }
  }
  // while click on Register button
  register(): void {
    if (this.registerFormControl.valid) {
      let data: registerUser = this.registerFormControl.value;
      console.log(data);
      this.loginService.registerUser(data).subscribe((response: ApiResponse) => {
        if (response.status === "SUCCESS") {
          this.apiService.openSnackBar(response.message);
        } else {
          this.apiService.openSnackBar(response.message);
        }
      }, err => {
        this.apiService.openSnackBar(err.error.message);
      })
    }
  }
  switchToSignup(): void {
    this.showCon = "register";
    this.loginFormControl.reset();
  }
  switchToLogin(): void {
    this.showCon = "login";
    this.loginFormControl.reset();
  }
}
