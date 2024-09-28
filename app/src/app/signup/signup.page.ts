import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {


  signupData = {
    username: '',
    email: '',
    password: '',
  };
  onSubmit() {
    // Handle the signup logic (e.g., call your signup API)
    console.log('Signup Data:', this.signupData);
  }

  constructor() { }

  

}




