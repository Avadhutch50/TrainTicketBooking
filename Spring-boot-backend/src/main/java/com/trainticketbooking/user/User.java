package com.trainticketbooking.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "UserDetails")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int id;
	@Column(name = "full_name",nullable = false)
	private String fullName;
	@Column(name = "mobile_number",nullable = false,unique = true)
	private String mobileno;
	@Column(name = "dob",nullable = false)
	private String dob;
	@Column(name = "email_id",nullable = false,unique = true)
	private String emailid;
	@Column(name = "username",nullable = false,unique = true)
	private String username;
	@Column(name = "password",nullable = false)
	private String password;
	public User() {}
	public User(String fullName, String mobileno, String dob, String emailid, String username,String password) {
		super();
		this.fullName = fullName;
		this.mobileno = mobileno;
		this.dob = dob;
		this.emailid = emailid;
		this.username = username;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", mobileno=" + mobileno + ", dob=" + dob + ", emailid="+ emailid + ", username=" + username + ", password=" + password + "]";
	}
}