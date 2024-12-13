import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNotification() {
    console.log('Notification button clicked');
    // Add your logic here
  }

  openHelpAndSupport() {
    console.log('Help & Support button clicked');
    // Add your logic here
  }

  signOut() {
    console.log('Sign Out button clicked');
    // Add your sign-out logic here
  }

}
