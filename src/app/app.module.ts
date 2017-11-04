import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Custom application modules
import { AppRouterModule } from './modules/router.module';
import { MaterialModule } from './modules/material.module';
import { Components } from './components/components.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
