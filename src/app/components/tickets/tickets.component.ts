import {Component, OnInit} from '@angular/core';
import {Ticket} from '../../models/ticket';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateTicketComponent} from '../create-ticket/create-ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets$: Observable<Ticket[]>;

  constructor(private data: DataService, private modalService: NgbModal) {
    // get messages from data service
    this.tickets$ = data.tickets$()
    // our data is paginated, so map to .data
      .map(m => m.data);
  }

  ngOnInit() {
  }

  openCreateTicketModal() {
    const modalRef = this.modalService.open(CreateTicketComponent);
    modalRef.componentInstance.isModal = true;
  }
}
