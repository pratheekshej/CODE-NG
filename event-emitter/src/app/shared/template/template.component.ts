import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @Output() emitDataValue: EventEmitter<any> = new EventEmitter<any>();
  public disabled: any = false;
  public btnText: any = 'Disable';

  constructor() { }

  emitData() {
    this.disabled = !this.disabled;
    this.btnText = 'Disable';
    if (this.disabled) {
      this.btnText = 'Enable';
    }
    const dataValue: any = {
      disabled : this.disabled
    };
    this.emitDataValue.emit(dataValue);
  }


  ngOnInit() {
    console.log('INIT-LOG');
  }

}
