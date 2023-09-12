import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  // public arr1:any=[1,2,3,4,5];
  // public Observable:any;
  // constructor(){
  //   this.Observable=from(this.arr1);
  //   this.Observable=of(2,3,4,5,"hiii",this.arr1);
  //   this.Observable.subscribe(
  //     ((res:any)=>{
  //       console.log(res);
        
  //     }),
  //     ((err:any)=>{
  //   console.log(err);

  //     })
  //   );
  //   this.Observable.pipe(
  //     map((x:any)=>x+2),
  //     filter((y:any)=>y+2)
  //   ).subscribe(
  //     ((res:any)=>{
  //       console.log(res);
        
  //     }),
  //     ((err:any)=>{
  //       console.log(err);
        
  //     })

  //   )
  // }
  public arr=[1,2,3,4,5];
  public Observable:any
  constructor(){
    this.Observable=from(this.arr);
    this.Observable=of(2,3,4,5,"Hiiii",this.arr)
    this.Observable.subscribe(
      ((res:any)=>{
        console.log(res);
        
      }),
      ((err:any)=>{
        console.log(err);
        
      }),
      this.Observable.pipe(
        map((x:any)=>x+2),
        filter((y:any)=>y+3)
      ).subscribe(
        ((res:any)=>{
          console.log(res);
          
        }),
        ((err:any)=>{
          console.log(err);
          
        })
      )
    )
  }
 }
