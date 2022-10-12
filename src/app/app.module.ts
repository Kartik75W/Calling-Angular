import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { DialogModule } from 'primeng/dialog'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';

import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormatTimePipe } from './pipe/format-time.pipe';
import { ContactsComponent } from './contacts/contacts.component';
import { OutgoingComponent } from './outgoing/outgoing.component';





@NgModule({
  declarations: [
    AppComponent,
    FormatTimePipe,
    ContactsComponent,
    OutgoingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicDialogModule,
    DialogModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
