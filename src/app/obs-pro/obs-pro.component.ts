import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-obs-pro',
  templateUrl: './obs-pro.component.html',
  styleUrls: ['./obs-pro.component.css']
})
export class ObsProComponent {
   
 constructor(){}
//  ngOnInit(){
  // const obs=new Observable((res:any)=>{
  //   console.log("Hello");
  //   res.next('obs 1')
  //   res.next('obs 2')
  //   res.next('obs 3')
  //   res.next('obs 4')

    
  // });
  // obs.pipe(
  //   filter((x)=>x=='obs 3')
  // )
  // .subscribe((res:any)=>{
  //   console.log(res);
    
  // })
//   const promise=new Promise((res:any)=>{
//     console.log("Hiii");
//     res('promise 1')
//     res('promise 2')
//     res('promise 3')
//     res('promise 4')

    
//   });
//   promise.then((res:any)=>{
//     console.log(res);
    
//   })
//  }
// }
 
  }