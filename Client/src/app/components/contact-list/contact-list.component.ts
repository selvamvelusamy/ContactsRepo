import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    public contactService: ContactsService,
    private dialog: MatDialog
  ) { }

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
  }
  
  onAddContact() {
    this.subscription.add(this.dialog.open(AddContactComponent, {
      width: '700px',
      panelClass: 'add-contact-popup'
    })
    .afterClosed()
    .subscribe(res => {
      if(res) {
        this.contactService.addContact(res);
      }
    })
    );
  }

}
