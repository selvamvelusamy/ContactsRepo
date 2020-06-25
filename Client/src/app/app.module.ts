import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './services/contacts.service';
import { ContactComponent } from './components/contact/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from "@angular/material/divider";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from '@angular/forms';
const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatDividerModule,
  MatSnackBarModule
];

const primengModules = [
  TableModule,
  InputTextModule
];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    AddContactComponent,
    TitleBarComponent,
    ConfirmDialogComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...materialModules,
    ...primengModules,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    ContactsService
  ],
  entryComponents: [
    ConfirmDialogComponent,
    AddContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
