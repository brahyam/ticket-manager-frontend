import {Injectable} from '@angular/core';
import {FeathersService} from './feathers.service';

@Injectable()
export class DataService {

  constructor(private feathers: FeathersService) {
  }

  // Tickets
  tickets$() {
    return this.feathers
      .service('tickets')
      .find();
  }

  createTicket(ticket) {
    if (!ticket) {
      return;
    }

    return this.feathers
      .service('tickets')
      .create(ticket);
  }

  getLatestTicketFromProduct(product) {
    return this.feathers
      .service('tickets')
      .find({
        query: {
          $limit: 1,
          product: product._id,
          $sort: {
            createdAt: -1
          }
        }
      });
  }

  // Products

  products$() {
    return this.feathers
      .service('products')
      .find();
  }

}
