import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import {FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  myControl = new FormControl();

  @ViewChild('element') element: ElementRef<HTMLElement>;

  elementOrigin = this.formatOrigin(null);

  showOptions: boolean;

  closeView: boolean;

  showingOptions: Array<any>;

  options: Array<any>;

  filterValue: any = '';

  subscription: Subscription = new Subscription();

  constructor(
    public contactService: ContactsService,
    private _focusMonitor: FocusMonitor,
    private _cdr: ChangeDetectorRef,
    private _ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit() {
    this.options = this.contactService.contacts;
    this.showingOptions = this.contactService.contacts;
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this.element)
        .subscribe(origin => this._ngZone.run(() => {
          this.elementOrigin = this.formatOrigin(origin);
          this._cdr.markForCheck();
    }));
    this.subscription.add(
      this.myControl.valueChanges.subscribe(value => {
        this.showingOptions = this.options.filter(option => option.name.toLowerCase().includes(value));
      })
    );
  }

  formatOrigin(origin: FocusOrigin) {
    setTimeout(() => {
      this.showOptions = origin ? true : false;
      if(!this.showOptions) {
        this.showingOptions = this.contactService.contacts;
    }
    }, 50)
  }

  onClickOption(email) {
    let id = this.options.findIndex((option) => option.email === email)
    this.router.navigate(['details', id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this.element);
  }

}
