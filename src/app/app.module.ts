import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppCarasoulComponent } from './app-carasoul/app-carasoul.component';
import { AppLinfranceComponent } from './app-linfrance/app-linfrance.component';
import { AppEducationComponent } from './app-education/app-education.component';
import { AppPagenotfoundComponent } from './app-pagenotfound/app-pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppCarasoulComponent,
    AppLinfranceComponent,
    AppEducationComponent,
    AppPagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
