import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ConfirmDialog } from 'src/app/interfaces/ConfirmDialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(
    public contactService: ContactsService
  ) { }

  ngOnInit(): void {
  }
  
  onAddContact() {
    let data: ConfirmDialog = {
      message: 'This is sample text',
      buttons: ['one', 'two']
    }
    this.contactService.createConfirmDialog(data)
    .subscribe(res => {
      console.log(res);
    })
  }

}
