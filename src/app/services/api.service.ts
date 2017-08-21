import {Injectable} from '@angular/core';

@Injectable()
export abstract class ApiService {

  constructor() {
  }

  private _url = 'https://my-todos-api.com';

  get url(): string {
    return this._url;
  }
}
