import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninGoogleComponent } from './account/signin-google/signin-google.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninGoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
