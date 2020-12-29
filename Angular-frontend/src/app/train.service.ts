import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Train } from './Train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private baseUrl = "http://localhost:8080/TrainTicketBooking/trains";
  constructor(private http:HttpClient) { }
  getTrainList()
  {
    return this.http.get<Train[]>(this.baseUrl);
  }
}
