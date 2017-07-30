import {Injectable} from '@angular/core';
import {RestService} from './feathers.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private app;

  constructor(private router: Router, private rest: RestService) {
    this.app = rest.app;
  }

  login(email, password) {
    this.app.authenticate({
      strategy: 'local',
      'email': email,
      'password': password
    })
      .then(response => {
        console.log('Authenticated!', response);
        return this.app.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        console.log('JWT Payload', payload);
        return this.app.service('users').get(payload.userId);
      })
      .then(user => {
        this.app.set('user', user);
        console.log('User', this.app.get('user'));
        this.router.navigate(['/dashboard']);
      })
      .catch(function (error) {
        console.error('Error authenticating!', error);
        return Promise.reject(error);
      });
  }

  logout() {
    this.app.logout();
    this.app.set('user', null);
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return !!this.app.get('user');
  }
}
