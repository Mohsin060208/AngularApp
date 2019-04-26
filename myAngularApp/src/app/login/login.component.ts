import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "abc@outlook.com";
  pass = "12439";
  submitted = false;
  onSubmit() { this.submitted = true; }
}
