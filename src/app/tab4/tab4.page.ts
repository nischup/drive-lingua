import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
    animations: [
    trigger('profileImageAnimation', [
      state('initial', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('final', style({ opacity: 1, transform: 'scale(1)' })),
      transition('initial => final', animate('1.5s ease-in-out'))
    ])]
})
export class Tab4Page implements OnInit {

 animationState = 'initial';
 
  constructor() { }

   ngOnInit() {
    setTimeout(() => {
      this.animationState = 'final';
    }, 100); // Trigger animation after component loads
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
