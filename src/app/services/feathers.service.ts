import {Injectable} from '@angular/core';

import * as feathers from 'feathers/client';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest/client';
import * as authentication from 'feathers-authentication-client';
import * as superagent from 'superagent';

const HOST = 'http://localhost:3030';

@Injectable()
export class FeathersService {
  public app: any;

  constructor() {
    this.app = feathers()
      .configure(rest(HOST).superagent(superagent))
      .configure(hooks())
      .configure(authentication({
        storage: localStorage
      }));
    console.log('The rest service is configured...');
  }

  // expose services
  public service(name: string) {
    return this.app.service(name);
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    return this.app.authenticate(credentials)
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
      })
      .catch(function (error) {
        console.error('Error authenticating!', error);
      });
  }

  public isLogged() {
    return !!this.app.get('user');
  }

  // expose logout
  public logout() {
    this.app.set('user', null);
    return this.app.logout();
  }
}
