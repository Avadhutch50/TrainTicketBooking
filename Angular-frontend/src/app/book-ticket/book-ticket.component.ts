import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../Ticket';
import { TicketService } from '../ticket.service';
import { Train } from '../Train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  ticket:Ticket = {"ticketid":0,"userid":undefined,"source":undefined,"destination":undefined,"trainNumber":undefined,"numberOfPassenger":0,"ticketPrice":0};
  ticketList:Ticket[];
  trainList:Train[];
  flag:boolean=false;
  constructor(private trainService:TrainService,private ticketService:TicketService,private route:Router) { }
  ngOnInit(): void {
    if(sessionStorage.getItem("userid")==null)
    {
      this.route.navigate(["/login"]);
    }
    this.trainService.getTrainList().subscribe(data=>this.trainList=data);
    this.ticketService.getAllTickets().subscribe(data=>this.ticketList=data);
  }
  callMe()
  {
    this.ticketList = this.ticketList.filter(data=>data.userid==Number(sessionStorage.getItem("userid")));
    console.log(this.ticketList);
  }
  myTickets()
  {
    this.callMe();
    this.flag = true;
  }
  checkPrice()
  {
    this.ticket.ticketPrice = this.ticket.numberOfPassenger * 300;
  }
  bookTicket()
  {
    this.ticket.ticketPrice = this.ticket.numberOfPassenger * 300;
    this.ticket.userid = Number(sessionStorage.getItem("userid"));
    if(this.ticket.source!=undefined&&this.ticket.destination!=undefined&&this.ticket.trainNumber!=undefined)
    {
      if(this.ticket.numberOfPassenger!=0)
      {
        let trn:Train[] = this.trainList.filter(data=>this.ticket.trainNumber===data.trainNumber);
        if(trn.length!=0)
        {
          this.ticketService.createTicket(this.ticket).subscribe(data=>this.ticket=data);
          alert("Your Ticket for "+this.ticket.source+" to "+this.ticket.destination+" of "+this.ticket.numberOfPassenger+" passenger is booked!");
          this.ticket={"ticketid":0,"userid":undefined,"source":undefined,"destination":undefined,"trainNumber":undefined,"numberOfPassenger":0,"ticketPrice":0};
          location.reload();
        }
        else
        {
          alert("Train number dose not exist!");
        }
      }
      else
      {
        alert("Number of passenger cannot be 0!")
      }
    }
    else
    {
      alert("Please enter all fields!");
    }
  }
}
