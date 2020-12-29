import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = "http://localhost:8080/TrainTicketBooking/ticket";
  constructor(private http:HttpClient) { }
  getAllTickets()
  {
    return this.http.get<Ticket[]>(this.baseUrl+"s");
  }
  createTicket(ticket:Ticket)
  {
    return this.http.post<Ticket>(this.baseUrl,ticket);
  }
}