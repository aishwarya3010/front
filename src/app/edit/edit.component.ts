import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emps;
  No;
  constructor(public routes:ActivatedRoute,
              public router:Router,
              public service:DataService) {
                this.routes.paramMap.subscribe((params)=>{
                  this.No=params.get("No");
                 // alert(this.No);
                })

                this.service.GetDataBuId(this.No).subscribe((respo)=>{
                  this.emps=respo[0];
                  console.log(this.emps);
                })
               }
     Update()
     {
       console.log(this.emps);
        this.service.Update(this.emps).subscribe((response)=>{
          
        })
     }
  ngOnInit() {
  }

}
