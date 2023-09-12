import { Component } from '@angular/core';

@Component({
  selector: 'app-template',

  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
 
public courses:any=["MBA","BBA","MSC","BSC"];
public showFlag:boolean=false;
public allData:any=[];
public count:number=1
public idd:any;
public fn:any;
public ln:any;
public em:any;
public cou:any;
public gen:any;
public ps:any;
public cpas:any;





  onSubmitData(data:any){
    console.log(data.value);
    
if(data.value.id===undefined){
  data.value.id==this.count;
  this.allData.push(data.value);
  if(this.allData.length>0){
    this.showFlag=true
  };
  this.count++
}else{
   this.allData.forEach((element:any)=>{
    if(data.value.id==element.id){
      console.log(element);
      element.fname=data.value.fname;
      element.lname=data.value.lname;
      element.eml=data.value.eml;
      element.course=data.value.coures;
      element.gender=data.value.gender;
      element.pass=data.value.pass;
      element.cpass=data.value.cpass;

      
    }
   });
   console.log(this.allData);
   
}
  }
  onDel(data:any){
    console.log(data);
    this.allData.forEach((element:any,index:any)=>{
      if(element.id==data.id){
        this.allData.splice(index,1)
      }
     })
    
  }
  onUpdata(data:any){
console.log(data);
this.idd=data.id;
this.fn=data.fname;
this.ln=data.lname;
this.em=data.email;
this.cou=data.course;
this.gen=data.gender;
this.ps=data.pass;
this.cpas=data.cpass;


  }
  onClickUpdateBTN(data:any){

  }
  }
  
  


