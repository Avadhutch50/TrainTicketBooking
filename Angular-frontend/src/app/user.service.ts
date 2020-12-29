import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/TrainTicketBooking/user";
  userList:User[];
  constructor(private http:HttpClient) {}
  getUserList()
  {
    return this.http.get<User[]>(this.baseUrl+"s");
  }
  addUser(user:User)
  {
    return this.http.post<User>(this.baseUrl,user);
  }
  updateUser(id:number,user:User)
  {
    return this.http.put<User>(this.baseUrl+"/"+id,user);
  }
  deleteUser(id:number)
  {
    return this.http.delete(this.baseUrl+"/"+id);
  }
}