import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:4000/api'
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  
  signUp(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/signUp', user);
  }

  signIn(user: { email: string; password: string; }){
    return this.http.post<any>(this.URL + '/signIn', user);
  }

  loggedIn(){
    // Si el token existe o no
    return !!localStorage.getItem('token');
  }

  getToken(){
    console.log('getToken', localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
