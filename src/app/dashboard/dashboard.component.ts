import {Component, OnInit} from '@angular/core';
import {Ticket} from '../ticket';
import {TicketService} from '../ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  tickets: Ticket[];

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.getTickets()
      .then(tickets => this.tickets = tickets);
  }
}
