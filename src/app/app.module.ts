import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
