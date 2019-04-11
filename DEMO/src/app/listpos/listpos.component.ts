import { Component, OnInit } from '@angular/core';
import { PosServiceService } from '../service/data/pos-service.service';
import { Router } from '@angular/router';
export class Pos {
  constructor(
    public id: number,
    public serialnumber: string,
    public owner: string,
    public contact: string,
    public manufacturer: string,
    public date: Date
  ){}
}
@Component({
  selector: 'app-listpos',
  templateUrl: './listpos.component.html',
  styleUrls: ['./listpos.component.css']
})
export class LISTposComponent implements OnInit {
pos: Pos;
dtOptions: DataTables.Settings = {};
message: string
  constructor(private posService: PosServiceService,private router: Router) { }

  ngOnInit():void {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

  this.refreshPos();
         
  }
  refreshPos(){

    this.posService.retrieveAllPos(this.pos).subscribe(
      response => {
        console.log(response);
        this.pos=response;
      })
  }

  deletePos(id){
    console.log('delete');
    this.posService.deletePos(id).subscribe(response => {
console.log(response);
this.message="Delete succesfull";
this.refreshPos();

    })
  }

  updatePos(){
    
    console.log('updating pos ${id}');
    this.router.navigate(['addPos'])
  }
}


