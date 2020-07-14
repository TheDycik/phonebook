import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IncludeComponent } from './include/include.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonPipePipe } from './pipes/person-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IncludeComponent,
    DeleteComponent,
    ItemEditComponent,
    PersonPipePipe
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
