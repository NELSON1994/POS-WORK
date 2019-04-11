import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PosServiceService } from '../service/data/pos-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export class Pos{
  constructor(
    public id: number,
    public serialnumber: string,
    public owner: string,
    public contact: string,
    public manufacturer: string,
    public date: Date
  ){

  }
}
@Component({
  selector: 'app-addpos',
  templateUrl: './addpos.component.html',
  styleUrls: ['./addpos.component.css']
})
export class ADDposComponent implements OnInit {
  pos: Pos;
  message: string;
  isSubmitted = false;
  posForm = this.formBuilder.group({
    serialnumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    owner: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(35)]],
    contact: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]],
    manufacturer: [''],
    date: ['' , Validators.required]
  });
  constructor(private posService: PosServiceService,private router: Router,private formBuilder : FormBuilder) { }
ngOnInit() {
  }
 createPos(): void {
  this.posService.addpos(this.pos).subscribe(data => {
    console.log(data);
    alert('P.O.S succesfully added');
  });
 };
}
