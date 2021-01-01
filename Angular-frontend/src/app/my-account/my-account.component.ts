import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  user:User;
  id;fullname;mobileno;dob;emailid;username;password;oldPassword;newPassword;
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userid")==null)
    {
      this.route.navigate(["/login"]);
    }
    this.id = sessionStorage.getItem('userid');
    this.fullname = sessionStorage.getItem('userfullname');
    this.mobileno = sessionStorage.getItem('usermobileno');
    this.dob = sessionStorage.getItem('userdob');
    this.emailid = sessionStorage.getItem('useremailid');
    this.username = sessionStorage.getItem('username');
    this.password = sessionStorage.getItem('password');
  }
  updateUserInfo()
  {
    this.user = { 
      "id":this.id,
      "fullName":this.fullname,
      "mobileno":this.mobileno,
      "dob":this.dob,
      "emailid":this.emailid,
      "username":this.username,
      "password":this.password
    };
    this.userService.updateUser(this.id,this.user).subscribe(data=>this.user=data);
    sessionStorage.setItem("userid",this.user.id.toString());
    sessionStorage.setItem("userfullname",this.user.fullName.toString());
    sessionStorage.setItem("usermobileno",this.user.mobileno.toString());
    sessionStorage.setItem("userdob",this.user.dob.toString());
    sessionStorage.setItem("useremailid",this.user.emailid.toString());
    sessionStorage.setItem("username",this.user.username.toString());
    sessionStorage.setItem("password",this.user.password.toString());
    alert("Account Details Updated successfully!")
  }
  changeUserPassword()
  {
    if(this.password==this.oldPassword)
    {
      if(this.oldPassword!=this.newPassword)
      {
        this.password = this.newPassword;
        this.updateUserInfo();
        location.reload();
        alert("Password changed successfully!");
      }
      else
      {
        alert("New Password cannot be same as Old password!")
      }
    }
    else
    {
      alert("Old Password is Incorrect!")
    }
  }
  deleteCurrentUser()
  {
    let id:number = Number(sessionStorage.getItem("userid"));
    this.userService.deleteUser(id).subscribe((data)=>data);
    sessionStorage.clear();
    location.reload();
    alert("Account Deleted Successfully!");
  }
}