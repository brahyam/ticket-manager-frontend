import {Component, OnInit} from '@angular/core';
import {Ticket} from '../../models/ticket';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  tickets: Ticket[];

  constructor() {
  }

  ngOnInit() {
    // this.ticketService.getTickets()
    //   .then(tickets => this.tickets = tickets);
  }
}
