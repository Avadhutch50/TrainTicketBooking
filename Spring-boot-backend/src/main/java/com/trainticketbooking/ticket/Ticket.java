package com.trainticketbooking.ticket;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ticket_details")
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ticket_id")
	private int ticketid;
	@Column(name = "user_id",nullable = false)
	private int userid;
	@Column(name = "source",nullable = false)
	private String source;
	@Column(name = "destination",nullable = false)
	private String destination;
	@Column(name = "train_number",nullable = false)
	private int trainNumber;
	@Column(name = "number_of_passenger",nullable = false)
	private int numberOfPassenger;
	@Column(name = "ticket_price",nullable = false)
	private double ticketPrice;
	public Ticket() {}
	public Ticket(int userid, String source, String destination, int trainNumber, int numberOfPassenger,double ticketPrice) {
		this.userid = userid;
		this.source = source;
		this.destination = destination;
		this.trainNumber = trainNumber;
		this.numberOfPassenger = numberOfPassenger;
		this.ticketPrice = ticketPrice;
	}
	public int getTicketid() {
		return ticketid;
	}
	public void setTicketid(int ticketid) {
		this.ticketid = ticketid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getTrainNumber() {
		return trainNumber;
	}
	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}
	public int getNumberOfPassenger() {
		return numberOfPassenger;
	}
	public void setNumberOfPassenger(int numberOfPassenger) {
		this.numberOfPassenger = numberOfPassenger;
	}
	public double getTicketPrice() {
		return ticketPrice;
	}
	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	@Override
	public String toString() {
		return "Ticket [ticketid=" + ticketid + ", userid=" + userid + ", source=" + source + ", destination="+ destination + ", trainNumber=" + trainNumber + ", numberOfPassenger=" + numberOfPassenger+ ", ticketPrice=" + ticketPrice + "]";
	}
}