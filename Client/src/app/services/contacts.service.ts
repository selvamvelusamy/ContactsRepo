import { Injectable } from '@angular/core';
import { ConfirmDialog } from '../interfaces/ConfirmDIalog';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/Contact';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }

  contacts: Array<Contact> = [
    {
      name: 'Anish',
      mobile: 9008998765,
      email: 'anish@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    },
    {
      name: 'Kumar',
      mobile: 9003993311,
      email: 'kumar@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    },
    {
      name: 'Selvam',
      mobile: 8144993311,
      email: 'selvam@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    },
    {
      name: 'Vinoth',
      mobile: 9876543210,
      email: 'vinoth@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    },
    {
      name: 'Karthick',
      mobile: 9897969594,
      email: 'karthick@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    },
    {
      name: 'Suresh',
      mobile: 9879879876,
      email: 'suresh@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    },
    {
      name: 'Ravi',
      mobile: 8979695949,
      email: 'ravi@gmail.com',
      address: 'No. 10, Adyar, CHennai'
    }
  ];

  createConfirmDialog(data: ConfirmDialog): Observable<any> {
    return this.dialog.open(ConfirmDialogComponent, {
      data,
      panelClass: 'confirm-dialog-popup',
      width: '700px'
    })
    .afterClosed()
  }

  createSnachbar(message: string) {
    const config = {
      duration: 3000
    }
    this.snackBar.open(message, 'DISMISS', config);
  }

  deleteContact(id) {
    this.contacts.splice(id, 1);
    this.createSnachbar('Contact deleted successfully');
  }
}
