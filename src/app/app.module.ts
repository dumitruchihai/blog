import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistcomponentComponent } from './postlistcomponent/postlistcomponent.component';
import { PostlistitemcomponentComponent } from './postlistitemcomponent/postlistitemcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    PostlistcomponentComponent,
    PostlistitemcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
