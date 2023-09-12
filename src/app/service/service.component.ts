import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
// public userData:any=[];
// constructor(private api:ApiService){

// }




//   getApiServiceData(){
// this.api.getData().subscribe((res:any)=>{
//   console.log(res);
//   this.userData=res;
  
// })

//   }
//   postApiServiceData(){
//     this.api.postData(this.userData).subscribe((res:any)=>{
//       console.log(res);
      
//     })
//   }
constructor(private api:ApiService){

}
  public userData:any=[];
getApiServiceData(){
this.api.getData().subscribe((res:any)=>{
  console.log(res);
  this.userData=res;
  
})
}
postApiServiceData(){
  this.api.postData(this.userData).subscribe((res:any)=>{
    console.log(res);
    
  })
}
 
}