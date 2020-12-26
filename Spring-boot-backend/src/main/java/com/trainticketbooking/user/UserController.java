package com.trainticketbooking.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/TrainTicketBooking")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@GetMapping(value = "/users")
	public List<User> getAllUsers()
	{
		return this.userRepository.findAll();
	}
	@GetMapping(value = "/user/{id}")
	public User getUserById(@PathVariable(value = "id")Integer id)
	{
		return this.userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found with id "+id));
	}
	@PostMapping("/user")
	public User createUser(@RequestBody User user)
	{
		return this.userRepository.save(user);
	}
	@PutMapping("/user/{id}")
	public User updateUser(@RequestBody User user,@PathVariable("id") Integer id)
	{
		User existingUser = this.userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found with id "+id));
		existingUser.setFullName(user.getFullName());
		existingUser.setMobileno(user.getMobileno());
		existingUser.setDob(user.getDob());
		existingUser.setEmailid(user.getEmailid());
		existingUser.setUsername(user.getUsername());
		existingUser.setPassword(user.getPassword());
		return this.userRepository.save(existingUser);
	}
	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> deleteUserById(@PathVariable("id")Integer id)
	{
		User existingUser = this.userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not found with id "+id));
		this.userRepository.delete(existingUser);
		return ResponseEntity.ok().body("User Deleted!");
	}
}