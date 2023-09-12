import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
//   public myForm:any;
//   public showFlag:boolean=false;
//   public count:number=0;
//   public allData:any=[];
//   constructor(private fb:FormBuilder){
//     this.myForm=this.fb.group({
//       idd:[''],
//       uname:[''],
//       eml:[''],
//       pass:[''],

//     })
//   }

//   onSubmitData(data:any){
// // console.log(this.myForm.value)
//   data.value.id=this.count;
//   console.log(this.myForm.value);
//  this.allData.push(this.myForm.value);
//  if(this.allData.length>0) {
//   this.showFlag=true;
//  };
//  this.count++;
  
//   }
//   onDeleteData(data:any){

//   }
//   onUpdataData(data:any){

//   }
//   onClickUpdateBtn(){

//   }
public myForm:any;
public showFlag:boolean=false;
public count:number=1
public allData:any=[];
constructor(private fb:FormBuilder){
  this.myForm=this.fb.group({
    idd:[],
    uname:['',Validators.required],
    eml:['',Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],
    pass:[''],
  })
}

onSubmitdata(){
console.log(this.myForm.value);
this.allData.push(this.myForm.value)
this.showFlag=true;
if(this.myForm.value.idd==null){
  this.myForm.value.idd=this.count
  this.count++;
}
console.log(this.myForm.value.idd);

 
}
onDeleteData(data:any){
   this.allData.splice(this.allData.indexOf(data),1);
  

}
 
onUpdataData(data:any){
  this.myForm.patchValue(data);
  console.log(data);
  
}
onClickUpdatrBtn(data:any){
  this.allData.splice(data.value.id,1,data.value)
  
}

  }


  
 