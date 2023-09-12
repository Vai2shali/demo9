import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  public name:any="Vaishalis"
public date=new Date();
public number=0.2345
public object:any={name:"vaishali",age:34}
public string="helloangular";
}
