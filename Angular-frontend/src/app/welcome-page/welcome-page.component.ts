import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  num:number;
  constructor() { }
  ngOnInit(): void {
    this.num =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }
}
