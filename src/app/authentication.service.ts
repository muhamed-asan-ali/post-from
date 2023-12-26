import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usersUrl = 'assets/users.json';
  private additionalUserDataUrl = 'assets/posts.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }


  getAdditionalUserData(): Observable<any> {
    return this.http.get<any>(this.additionalUserDataUrl);
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.getUsers().subscribe(users => {
        const authenticatedUser = users.find((user: { username: string; password: string; }) => user.username === username && user.password === password);
        observer.next(!!authenticatedUser);
        observer.complete();
      });
    });
  }
}
