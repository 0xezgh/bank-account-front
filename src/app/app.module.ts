import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperationsComponent } from './operations/operations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    PageNotFoundComponent,
    OperationsHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
