import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _snackBar: MatSnackBar) { }
  baseUrl: string = "http://localhost:8080/coaching/api/v1/";
  registerUser: string = "addUser";
  loginUser: string = "loginUser";
  getUrl(url: string) {
    let fullUrl: string = "";
    if (url === "register") {
      fullUrl = this.baseUrl + this.registerUser;
    }
    if (url === "login") {
      fullUrl = this.baseUrl + this.loginUser;
    }
    return fullUrl;
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2 * 1000,
    });
  }
}
