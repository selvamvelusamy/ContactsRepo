import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<AddContactComponent>
  ) { }

  createContactForm: any;

  ngOnInit(): void {
    this.createContactForm = this.builder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      company: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  closeModal(value) {
    if(value) 
      this.dialogRef.close(this.createContactForm.value);
    else 
      this.dialogRef.close(value);
  }

}
