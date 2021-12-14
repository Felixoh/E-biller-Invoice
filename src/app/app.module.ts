import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbillerComponent } from './components/ebiller/ebiller.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionsComponent } from './component/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    EbillerComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
