import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  GetData()
  {
    return this.http.get("http://192.168.42.12:4000/employees");
  }
  AddData(emp:any)
  {
   return this.http.post("http://192.168.42.12:4000/employees",emp);
  }
  Delete(no:any)
  {
    return this.http.delete("http://192.168.42.12:4000/employees/"+no);
  }
  GetDataBuId(no:any)
  {
    return this.http.get("http://192.168.42.12:9090/employees/"+no);
  }Update(empl)
  {
    return this.http.put("http://192.168.42.12:9090/employees/"+empl.No,empl)
  }
} 
