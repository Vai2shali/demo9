import { Component } from '@angular/core';

 
@Component({
  selector: 'app-templare',
  templateUrl: './templare.component.html',
  styleUrls: ['./templare.component.css']
})
export class TemplareComponent {

// public idd:any;
// public fn:any;
// public ln:any;
// public em:any;
// public allData:any=[];
// public count:number=1;
// public showFlag:boolean=false;
// onSubmitData(data:any){
//   console.log(data.value);
  
//  if(data.value.id==undefined){
//   data.value.id=this.count;
//   this.allData.push(data.value);
//   if(this.allData.length>0){
//     this.showFlag=true
//   }
//   this.count++;
//  }else{
//   this.allData.forEach((element:any)=>{
//     if(data.value.id=element.id){
//       console.log(element);
//        element.fname=data.value.fname;
//       element.lname=data.value.lname;
//       element.eml=data.value.eml;



      
//     }
//   })
//  }
// }
// onDeleteData(data:any){
// console.log(data);
// this.allData.forEach((element:any,index:any)=>{
//   if(element.id==data.id){
//     this.allData.splice(index,1);
//   }
// })
// }
// onUpdataData(data:any){
// console.log(data);
// this.idd=data.idd;
// this.fn=data.fname;
// this.ln=data.lname;
// this.em=data.eml;


// }
// onClickupdataBtn(data:any){
 
// }
public idd:any;
public fn:any;
public ln:any;
public em:any;
public allData:any=[];
public count:number=1
public showFlag:boolean=false;



onSubmitData(data:any){
 console.log(data.value);
if(data.value.id===undefined){
  data.value.id=this.count
  this.allData.push(data.value);
  if(this.allData.length>0){
    this.showFlag=true
  };
  this.count++;
}else{
  this.allData.forEach((element:any)=>{
    if(data.value.id==element.id){
      console.log(element);
      element.fname=data.value.fname
      element.lname=data.value.lname
      
      element.eml=data.value.eml
      

      
    }
  });
  console.log((this.allData));
  
}

}
onDeleteData(data:any){
console.log(data);
this.allData.forEach((element:any,index:any)=>{
  if(element.id=data.id){
    this.allData.splice((index),1)
  }
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

}
}