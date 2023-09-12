import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    //to insert data
   
    
   }
   addData(data:any){
    return this.http.post(" http://localhost:3000/posts/",data)  
   }
   //to read the data
   getData(){
    return this.http.get(" http://localhost:3000/posts")
   }
   //to delete the data
   deleteData(id:any){
    return this.http.delete(" http://localhost:3000/posts/"+id);
   }
   //to updeteData
   upDateData(data:any){
    return this.http.put(" http://localhost:3000/posts/"+data.id,data)
   }
  }
