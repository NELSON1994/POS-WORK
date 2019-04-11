import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../sevice/user-service.service';
import {Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: User;

  constructor(private formBuilder: FormBuilder,private router: Router, private userServiceService: UserServiceService) { }
  registerForm = this.formBuilder.group({
    firstname: ['', [ Validators.required , Validators.minLength(3)] ],
    username: ['' , [Validators.minLength(6), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.minLength(6), Validators.required]],
    phone: ['', [Validators.required , Validators.minLength(10) , Validators.maxLength(12)]],
    conpassword: ['', Validators.required ]
  });
  isSubmitted  =  false;
  ngOnInit() {
  }
 // get formControls() { return this.registerForm.controls;}
  register() {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return this.router.navigate(['register']);
    }
    this.userServiceService.createUser(this.user).subscribe(data => {alert('SUCCEESFULLY REGISTERED'); } );
    this.router.navigate(['login']);
  }

}
