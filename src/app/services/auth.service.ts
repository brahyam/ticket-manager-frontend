import {Injectable} from '@angular/core';
import {FeathersService} from './feathers.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  public userLogged: false;

  constructor(private feathers: FeathersService, private router: Router) {
  }

  public logIn(credentials?): Promise<any> {
    return this.feathers.authenticate(credentials);
  }

  public isLogged() {
    return this.feathers.isLogged();
  }

  public logOut() {
    this.feathers.logout();
    this.router.navigate(['/']);
  }
}
