import { Component, OnInit } from '@angular/core';
import { WelcomeDataServiceService } from '../service/data/welcome-data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: WelcomeDataServiceService) { }

  ngOnInit() {
    this.getWelcomeMessage();
  }
 getWelcomeMessage(){
  // console.log (this.service.executeWelcomeService());
  this.service.executeWelcomeService()
  .subscribe(data => console.log(data));
 // console.log("welcome here");
 }
}
