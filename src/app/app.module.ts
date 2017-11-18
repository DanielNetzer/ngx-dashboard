import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Custom application modules
import { AppRouterModule } from './modules/router.module';
import { MaterialModule } from './modules/material.module';
import { Components } from './components/components.module';

// Drag and Drop
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { HomeComponent } from './containers/home/home.component';
import { DragDelayLiftDirective } from './directives/drag-delay-lift/drag-delay-lift.directive';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    PageNotFoundComponent,
    HomeComponent,
    DragDelayLiftDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouterModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
