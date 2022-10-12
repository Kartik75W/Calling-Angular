import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
// import { AddContactComponent } from './add-contact/add-contact.component';
import { OutgoingComponent } from './outgoing/outgoing.component';



const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'outgoingcall', component: OutgoingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
