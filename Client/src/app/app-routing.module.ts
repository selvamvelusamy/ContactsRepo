import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: ContactListComponent
  },
  {
    path: 'edit/:id',
    component: EditContactComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
