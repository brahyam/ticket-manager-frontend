import {Injectable} from '@angular/core';

import * as feathers from 'feathers/client';
import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as authentication from 'feathers-authentication-client';

import * as Rx from 'rxjs';

const HOST = 'http://localhost:3030';

@Injectable()
export class FeathersService {
  private _feathers: any;
  private _socket: any;

  constructor() {
    this._socket = io(HOST);       // init socket.io

    this._feathers = feathers();                      // init Feathers
    this._feathers.configure(hooks());                // add hooks plugin
    this._feathers.configure(feathersRx(Rx));         // add feathers-reactive plugin
    this._feathers.configure(socketio(this._socket)); // add socket.io plugin
    this._feathers.configure(authentication({         // add authentication plugin
      storage: window.localStorage
    }));
    console.log('The rest service is configured...');
  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose logout
  public logout() {
    this._feathers.set('user', null);
    return this._feathers.logout();
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials)
      .then(response => {
        console.log('Authenticated!', response);
        return this._feathers.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        console.log('JWT Payload', payload);
        return this._feathers.service('users').get(payload.userId);
      })
      .then(user => {
        this._feathers.set('user', user);
        console.log('User', this._feathers.get('user'));
      })
      .catch(function (error) {
        console.error('Error authenticating!', error);
      });
  }

  public isLogged() {
    return !!this._feathers.get('user');
  }
}
