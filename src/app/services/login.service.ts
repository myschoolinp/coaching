import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerUser } from '../models/registerUser';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  // login user
  loginUser(data: any): Observable<any> {
    let url = this.apiService.getUrl("login");
    return this.http.post(url, data);
  }


  registerUser(data: registerUser): Observable<any> {
    let url = this.apiService.getUrl("register");
    return this.http.post(url, data);
  }

  getData(): Observable<any> {
    return this.http.get("https://spring-boot-app-np.herokuapp.com/coaching/api/v1/home");
  }

}
