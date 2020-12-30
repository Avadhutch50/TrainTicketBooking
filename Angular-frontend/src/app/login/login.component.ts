import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  num:number;
  userList:User[];
  username:string;
  password:string;
  constructor(private userService:UserService,private route:Router) { }
  ngOnInit(): void {
    this.num =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.userService.getUserList().subscribe((data)=>this.userList=data);
    if(sessionStorage.getItem("userid")!=null)
    {
      this.route.navigate(["/home"]);
    }
  }
  userLogin()
  {
    let user:User = this.userList.filter(u=>u.username==this.username&&u.password==this.password)[0];
    if(user!=null)
    {
      sessionStorage.setItem("userid",user.id.toString());
      sessionStorage.setItem("userfullname",user.fullName.toString());
      sessionStorage.setItem("usermobileno",user.mobileno.toString());
      sessionStorage.setItem("userdob",user.dob.toString());
      sessionStorage.setItem("useremailid",user.emailid.toString());
      sessionStorage.setItem("username",user.username.toString());
      sessionStorage.setItem("password",user.password.toString());
      alert("Login Successful!");
      this.route.navigate(['/home']);
      location.reload();
    }
    else
    {
      alert("Login failed! Incorrect Credetials");
    }
  }
}
