import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs/Observable';
import {TicketTypes} from '../../models/ticket-type.enum';
import {TicketPriorities} from '../../models/ticket-priority.enum';
import {Ticket} from '../../models/ticket';
import {TicketStatus} from '../../models/ticket-status.enum';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  @Input() isModal: boolean;
  // Select Fill in
  errors: string;
  products$: Observable<Product[]>;
  types: string[] = TicketTypes;
  priorities: string[] = TicketPriorities;
  // Selection Elements
  selectedProduct: string;
  selectedType: string = TicketTypes[0];
  inputSummary: string;
  selectedPriority: string = TicketPriorities[0];
  inputDescription: string;


  constructor(public activeModal: NgbActiveModal, private data: DataService) {
    // Load products
    this.products$ = data.products$()
      .map(p => p.data);
  }

  ngOnInit() {
  }

  createTicket() {
    // Build object
    console.log('selected product:', this.selectedProduct);
    const ticket: Ticket = {
      summary: this.inputSummary,
      status: TicketStatus[0],
      priority: this.selectedPriority,
      type: this.selectedType,
      description: this.inputDescription,
      resolution: '',
      product: this.selectedProduct
    };

    console.log('creating ticket:', ticket);

    this.data.createTicket(ticket)
      .then(data => {
        console.log('created ticket:', data);
        this.activeModal.close();
      })
      .catch(err => {
        console.log('error creating ticket:', err);
        this.errors = err.message;
      });
  }
}
