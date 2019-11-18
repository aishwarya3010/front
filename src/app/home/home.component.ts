import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees;

  constructor( public router:Router,public service:DataService) {
    this.getData();
    
   }

   getData(){
    let StateOfResult =this.service.GetData();
    StateOfResult.subscribe((result)=>{
      this.employees=result;
      
    });
   }
  ngOnInit() {
    
    // this.employees=[{no:1,name:"Aishu",address:"Sangli"},
    // {no:2,name:"Deeps",address:"Latur"},
    // {no:3,name:"Pooja",address:"Pune"} ]  
    

  }
  GoTORegister()
  {
    this.router.navigate(['register'])
    
  }
  Delete(no)
  {
    this.service.Delete(no).subscribe((response)=>{

      console.log(response);
      this.getData();

    })
  }
}
