import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Subscription } from 'rxjs';
import { ConfirmDialog } from 'src/app/interfaces/ConfirmDIalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(
    private contactService: ContactsService,
    private router: Router
  ) { }

  subscription: Subscription = new Subscription();

  @Input() name: string;

  @Input() id: number;

  ngOnInit(): void {
  }

  onDelete(event) {
    event.stopPropagation();
    let data: ConfirmDialog = {
      message: 'I am going to delete the contact',
      buttons: ['Cancel', 'Delete']
    };
    this.subscription.add(this.contactService.createConfirmDialog(data)
    .subscribe(res => {
      if(res) {
        this.contactService.deleteContact(this.id);
      }
    })
    )
  }

  onEdit() {
    this.router.navigate(['edit',this.id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
