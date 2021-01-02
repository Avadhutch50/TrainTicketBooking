import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../Train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent implements OnInit {

  trainList:Train[];
  searchByNumber:number;
  searchByCity:string;
  constructor(private route:Router,private trainService:TrainService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userid")==null)
    {
      this.route.navigate(["/login"]);
    }
    this.trainService.getTrainList().subscribe((data)=>this.trainList=data);
  }

}
