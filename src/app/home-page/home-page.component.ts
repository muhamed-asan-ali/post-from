import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  username: string = '';
  userDetails: any;
  additionalUserData: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the username from the route parameter
    this.route.params.subscribe(params => {
      this.username = params['username'];

      // Retrieve user details based on the username
      this.authService.getUsers().subscribe(users => {
        this.userDetails = users.find((user: { username: string; }) => user.username === this.username);
      });


      this.authService.getAdditionalUserData().subscribe(data => {
        this.additionalUserData = data.find((item: { username: string; }) => item.username === this.username);
      });

      
    });
  }


  navigateToAdditionalUserData() {
    // Navigate to additional user data page with the same username
    this.router.navigate(['/profile', this.username]);
  }
}
