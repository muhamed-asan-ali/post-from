import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.css'
})
export class PersonalPageComponent implements OnInit{

  username: string = '';
  additionalUserData: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];

      // Retrieve additional user data based on the username
      this.authService.getAdditionalUserData().subscribe(data => {
        this.additionalUserData = data.find((item: { username: string; }) => item.username === this.username);
      });
    });
  }

}
