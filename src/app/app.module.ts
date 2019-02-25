import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { PageoneComponent } from './base/pageone/pageone.component';
import { PagetwoComponent } from './base/pagetwo/pagetwo.component';
import { PagethreeComponent } from './base/pagethree/pagethree.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
