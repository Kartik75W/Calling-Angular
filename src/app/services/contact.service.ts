import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  callingToName = new Subject<any>()
  constructor() { }
  addContact(addedContact: any) {
    let allNum = [];
    if (localStorage.getItem('Contacts')) {
      allNum = JSON.parse(localStorage.getItem('Contacts') as any)
      allNum = [...allNum, addedContact]
    } else {
      allNum = [addedContact];
    }
    localStorage.setItem('Contacts', JSON.stringify(allNum))

  }

  getContacts(){
    return JSON.parse(localStorage.getItem('Contacts') as any)
  }

}
