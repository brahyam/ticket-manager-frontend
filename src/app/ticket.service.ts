import {Injectable} from '@angular/core';
import {RestService} from './feathers.service';

import 'rxjs/add/operator/toPromise';

import {Ticket} from './ticket';


@Injectable()
export class TicketService {

  private app;

  constructor(private rest: RestService) {
    this.app = rest.app.service('tickets');
  }

  getTickets() {
    return this.app
      .find()
      .then(response => response.data as Ticket[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}
