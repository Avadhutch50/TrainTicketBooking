import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  num:number;
  user:User;
  userList:User[];
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.num =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.userService.getUserList().subscribe((data)=>this.userList=data);
    if(sessionStorage.getItem("userid")!=null)
    {
      this.route.navigate(["/home"]);
    }
    this.user = {"id":undefined,"fullName":undefined,"mobileno":undefined,"dob":undefined,"emailid":undefined,"username":undefined,"password":undefined};
  }
  registerUser()
  {
    if(this.user.fullName!=undefined&&this.user.mobileno!=undefined&&this.user.dob!=undefined&&this.user.emailid!=undefined&&this.user.username!=undefined&&this.user.password!=undefined)
    {
      this.userService.addUser(this.user).subscribe((data)=>this.user=data);
      alert("User Registration Successful!");
      this.route.navigate(['/login']);
    }
    else
    {
      alert("Please fill all mandatory fields!");
    }
  }
}