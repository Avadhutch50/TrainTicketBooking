package com.trainticketbooking.ticket;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/TrainTicketBooking")
public class TicketController {
	@Autowired
	private TicketRepository ticketRepository;
	@GetMapping(value = "/tickets")
	public List<Ticket> getAllTickets()
	{
		return this.ticketRepository.findAll();
	}
	@PostMapping(value = "/ticket")
	public Ticket addTicket(@RequestBody Ticket ticket)
	{
		return this.ticketRepository.save(ticket);
	}
}