import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('popover') popover;

  isOpen = false;
  presentPopover(e: any) {
    this.popover.event = e;
    this.isOpen = true;
  }

}

