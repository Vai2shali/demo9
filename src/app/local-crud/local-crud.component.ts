import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-local-crud',
  templateUrl: './local-crud.component.html',
  styleUrls: ['./local-crud.component.css']
})
export class LocalCrudComponent {

public allData:any=[]
public idd:any;
public fn:any;
public ln:any;
public em:any;


constructor(private data:DataService){
  this.getServiceData()
}

  onSubmitData(data:any){
this.data.addData(data.value).subscribe((res:any)=>{
  console.log(res);
  this.getServiceData();
  
})
  }
  getServiceData(){
this.data.getData().subscribe((res:any)=>{
  console.log(res);
  this.allData=res;
  
})
  }
  onDeleteData(data:any){
this.data.deleteData(data.id).subscribe((res:any)=>{
  console.log(res);
  this.getServiceData();
  
})
  }
  onUpdateData(data:any){
console.log(data);
this.idd=data.id;
this.fn=data.fname;
this.ln=data.lname;
this.em=data.eml

  }





  onClickUpdatrBtn(data:any){
this.data.upDateData(data.value).subscribe((res:any)=>{
  console.log(res);
  this.getServiceData()
  
  
})
  }
}
