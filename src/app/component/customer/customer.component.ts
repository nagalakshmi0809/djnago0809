import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { posts } from '../../../_model/posts';
import { Student } from '../../../_model/customer';
import { MatRowDef, MatTableDataSource } from '@angular/material/table';
import { MatCard } from '@angular/material/card';
import { MaterialModule } from '../../../_module/Material.Module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule,CommonModule,MatRowDef],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  constructor(private service:MasterService){
    
  }
  postdata!:Student[];
  datasource:any;
  displayColumns :string[]=['id','name','address','fee'];
  ngOnInit(): void {
    this.LoadIntialData();
    
  }

  LoadIntialData(){
    this.service.GetAllCustomer().subscribe(item=>{
      this.postdata=item;
      console.log(this.postdata, "TestData........");
      this.datasource=new MatTableDataSource(this.postdata);

    })

  }

}
