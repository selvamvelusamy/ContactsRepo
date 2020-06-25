import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/Contact';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private location: Location
  ) { }

  keys: any;

  id: number;

  contact: Contact;

  subscription: Subscription = new Subscription()

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.contact = this.contactService.getContactDetails(this.id);
        this.keys = Object.keys(this.contact);
      })
    );
  }

  onBack() {
    this.location.back();
  }

  onSave() {
    this.contactService.saveDetails(this.contact, this.id);
    this.contactService.createSnachbar('Contact saved successfully');
    this.onBack();
  }

}
