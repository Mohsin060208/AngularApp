import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router:Router, private service: AuthService) { 
    }
    ngOnInit() {
    }
    submitted = false;
    pass : string;
    PassCheck = "Enter registered Password";
    email: string;
    EmailCheck = "Enter registered Email";
    onSubmit(email: string, pass: string) { 
      this.submitted = this.service.validate(email,pass);
      if(this.submitted == true){
        this.router.navigate(['/about']);
      }
      else{
        alert("Please fill in the form with valid credentials.");
        this.router.navigate(['/login']);
      }

    }
    checkPassword(event: Event){
      this.pass = (<HTMLInputElement>event.target).value.toString();
    if(this.pass == "12439"){
      this.PassCheck = "Password is correct";
      this.submitted = true; 
    }
    else{
      this.PassCheck = "Password is Incorrect";
      this.submitted = false;
      }
    }
    checkEmail(event: Event){
      this.email = (<HTMLInputElement>event.target).value.toString();
    if(this.email == "123@outlook.com"){
      this.EmailCheck = "Email is correct";
      this.submitted = true; 
    }
    else{
      this.EmailCheck = "Email is Incorrect";
      this.submitted = false;
      }
    }
  }
