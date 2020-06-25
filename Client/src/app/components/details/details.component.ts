import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/interfaces/Contact';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private contactService: ContactsService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  subscription: Subscription = new Subscription();

  contact: Contact;

  keys: Array<string> = [];

  id: number;

  ngOnInit(): void {
    this.subscription.add(this.route.params.subscribe(params => {
      this.id = params.id;
      this.contact = this.contactService.getContactDetails(this.id);
      this.keys = Object.keys(this.contact);
    }));
  }

  goBack() {
    this.location.back();
  }

  onEdit() {
    this.router.navigate(['edit', this.id]);
  }

}
