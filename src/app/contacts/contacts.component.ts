import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  closeResult?: string
  addingNumber: FormGroup
  addedContact: any = {}
  showNumVal: any
  searchText: any
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,


  ) {
  }

  ngOnInit(): void {
    this.showNumVal = JSON.parse(localStorage.getItem('Contacts') as any)
    this.createRegistration();
    this.onSubmit()
    // this.registrationForm = new FormGroup({
    //   number: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // })
  }
  createRegistration() {
    this.addingNumber = this.fb.group({
      number: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      name: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.addingNumber.valid) {
      this.addedContact = Object.assign(this.addedContact, { ...this.addingNumber.value, currentTime: [] })
      this.contactService.addContact(this.addedContact)
      this.showNumVal = this.contactService.getContacts()
      this.addingNumber.reset()
    }
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  goToPage(outgoingcall: string, item: any, name: string) {
    this.router.navigate([`${outgoingcall}`], {
      queryParams: { items: item, name: name }
    })
  }
  onlyNumberValidation(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
