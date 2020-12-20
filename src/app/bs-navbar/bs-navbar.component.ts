import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(public authService: AuthService) {   
    this.user$ = authService.status();
      // console.log(this.user);    
  }
 
  logout() {
    this.authService.logout();
  }

}
