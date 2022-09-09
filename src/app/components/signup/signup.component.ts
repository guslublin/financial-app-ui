import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ AuthService ]
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.user)
      .subscribe(
        (res)=>{
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
        },
        (err)=>{console.log(err)}
      );
    // .subscribe(res=>{console.log(res)}, err=>{console.log(err)});
  }

}
