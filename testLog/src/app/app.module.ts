import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { flatMap } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycParentBlogComponent } from './components/myc-parent-blog/myc-parent-blog.component';
import { Myc02Child1ModifyComponent } from './components/myc02-child1-modify/myc02-child1-modify.component';
import { Myc03Child2PhotoComponent } from './components/myc03-child2-photo/myc03-child2-photo.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    MycParentBlogComponent,
    Myc02Child1ModifyComponent,
    Myc03Child2PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
