package com.trainticketbooking.train;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/TrainTicketBooking")
public class TrainController {
	@Autowired
	private TrainRepository trainRepository;
	
	@GetMapping(value = "/trains")
	public List<Train> getAllTrains()
	{
		return this.trainRepository.findAll();
	}
}