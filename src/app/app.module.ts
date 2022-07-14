import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { StrengthPipe } from './pipes/strength.pipe';
import { MessageService } from './services/message.service';
import { ChildComponent } from './components/child/child.component';
import { HerosComponent } from './components/heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    ChildComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
