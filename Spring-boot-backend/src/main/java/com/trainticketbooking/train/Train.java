package com.trainticketbooking.train;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "train_details")
public class Train {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "train_number")
	private int trainNumber;
	@Column(name = "train_name",nullable = false)
	private String name;
	@Column(name = "source",nullable = false)
	private String source;
	@Column(name = "destination",nullable = false)
	private String destination;
	@Column(name = "details",nullable = false)
	private String details;
	public Train() {}
	public Train(String name, String source, String destination, String details) {
		this.name = name;
		this.source = source;
		this.destination = destination;
		this.details = details;
	}
	public int getTrainNumber() {
		return trainNumber;
	}
	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	@Override
	public String toString() {
		return "Train [trainNumber=" + trainNumber + ", name=" + name + ", source=" + source + ", destination="+ destination + ", details=" + details + "]";
	}
}