import {Component, OnInit} from '@angular/core';
import {Ticket} from '../../models/ticket';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.getTickets()
      .then(tickets => this.tickets = tickets);
  }

}
