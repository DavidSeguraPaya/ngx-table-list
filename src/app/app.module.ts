import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTableListComponent } from 'projects/ngx-table-list/src/public-api';
import { AppComponent } from './app.component';@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTableListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
