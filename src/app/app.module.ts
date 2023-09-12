import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
 import {ServiceComponent} from './service/service.component';
 import { DirectiveComponent } from './myProject/directive/directive.component';
 import {HttpClientModule} from '@angular/common/http';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplareComponent } from './templare/templare.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ObsProComponent } from './obs-pro/obs-pro.component';
 import { RxjsComponent } from './rxjs/rxjs.component';
import { PipeComponent } from './pipe/pipe.component'; 
import { TemplateComponent } from './template/template.component';
import { MrMrsPipe } from './mr-mrs.pipe';
import { LocalCrudComponent } from './local-crud/local-crud.component';
@NgModule({
  declarations: [
    AppComponent,
     ServiceComponent,
     DirectiveComponent,
     DatabindingComponent,
     TemplareComponent,
     ReactiveComponent,
     ObsProComponent,
     RxjsComponent,
     PipeComponent,
     TemplateComponent,
     MrMrsPipe,
     LocalCrudComponent
    ],
  imports : [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
