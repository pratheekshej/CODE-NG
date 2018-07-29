import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() dataRecieved: any;
  public enabledText: string;

  constructor() { }

  ngOnInit() {
    this.enabledText  = 'Enabled';
  }

  ngOnChanges() {
    console.log('RECIEVED DATA ::> ', this.dataRecieved);
    this.enabledText = 'Enabled';
    if (typeof this.dataRecieved !== 'undefined') {
      if (this.dataRecieved.disabled) {
        this.enabledText = 'Disabled';
      }
    }
  }

}
