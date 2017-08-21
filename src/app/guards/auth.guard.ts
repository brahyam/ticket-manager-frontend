import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('using authGuard');
    return this.auth
      .logIn()
      .then(() => true)
      .catch(() => {
        this.router.navigate(['/login']);
        return false;
      });
    // if (this.auth.isLoggedIn()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
  }
}
