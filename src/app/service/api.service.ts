import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public link:any="https://jsonplaceholder.typicode.com/users";
constructor(private http:HttpClient){

}
 getData(){
  return this.http.get(this.link)
 }
 postData(data:any){
  return this.http.post(this.link,data)
 }
}
 