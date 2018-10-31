import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewElementComponent } from './preview/preview-element.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    PreviewElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
