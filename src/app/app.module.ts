import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { PreviewElementComponent } from './preview/preview-element.component';
import { DesignerComponent } from './designer.component';

const appRoutes: Routes = [
  { path: '', component: DesignerComponent },
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    PreviewElementComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
