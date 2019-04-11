import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { UserServiceService } from '../sevice/user-service.service';

export class User {
constructor(
  email: string,
firstname: string,
username: string,
phone: number,
conpassword: string,
password: string
){}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LogInComponent implements OnInit {
  user: User;
    constructor( private router: Router, private formBuilder: FormBuilder, private  userService: UserServiceService) { }
    loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   
    isSubmitted  =  false;
    ngOnInit() {
      
    }
   //  get formControls() { return this.loginForm.controls; }
    login() {
      console.log(this.loginForm.value);
      this.isSubmitted = true;
      if (this.loginForm.invalid) {
        alert('INVALID USERNAME OR PASSWORD  !!!!!')
        return this.router.navigateByUrl('/login');
      }
      this.userService.loginUser(this.user).subscribe(data => {alert('LOGIN SUCCESFULL  !!!!!'); });
      this.router.navigateByUrl('/dashboard');
    }
  
  }



