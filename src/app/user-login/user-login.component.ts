import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.authenticate(username, password).subscribe(authenticated => {
        if (authenticated) {
          console.log('Login successful');

          // Navigate to user details page upon successful login
          this.router.navigate(['/home', username]);
        } else {
          console.error('Invalid credentials');
          // Display error message or perform actions for failed login
        }
      });
    }
  }

  navigateToUserDetails() {
    // Navigate to user details page with a sample username
    this.router.navigate(['/home', 'user1']);
  }

}
