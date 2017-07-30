import {Injectable} from '@angular/core';

import * as feathers from 'feathers/client';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest/client';
import * as authentication from 'feathers-authentication-client';
import * as superagent from 'superagent';

const HOST = 'http://localhost:3030';

@Injectable()
export class RestService {
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
}
