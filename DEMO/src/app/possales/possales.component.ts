import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_POS, ADD_POS, REMOVE_POS } from '../actions';
import { Pos } from '../pos';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-possales',
  templateUrl: './possales.component.html',
  styleUrls: ['./possales.component.css']
})
export class POSSalesComponent implements OnInit {

  @select () pos;
  lastUpdate;

model: Pos = {
  id:0,
  serialnumber:"",
  amount: "",
  quantity: ""
};


  dtOptions: DataTables.Settings = {};

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() : void{
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  clearPosSales() {
    this.ngRedux.dispatch({type: REMOVE_ALL_POS});
  }
  addPosSales() {
    this.ngRedux.dispatch({type: ADD_POS, p: this.model});
  }

  deletePosSales(p) {
    this.ngRedux.dispatch({type: REMOVE_POS, id: p.id });
  }
}
