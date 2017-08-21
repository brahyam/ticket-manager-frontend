import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() isModal: boolean;
  email: string;
  password: string;
  errors: string;

  constructor(private router: Router, public activeModal: NgbActiveModal, private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    console.log('Trying to log in');
    this.authService.logIn({
      strategy: 'local',
      email: this.email,
      password: this.password
    })
      .then(user => {
        console.log('Logged ', user);
        this.activeModal.close();
        this.router.navigate(['/tickets']);
      })
      .catch(error => {
        console.error('Failed Log in, error:', error);
        this.errors = error.message;
      });
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
