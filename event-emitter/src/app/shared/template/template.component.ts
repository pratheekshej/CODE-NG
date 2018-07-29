import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @Output() emitDataValue: EventEmitter<any> = new EventEmitter<any>();
  public disabled: any = false;

  constructor() { }


  emitData() {
    this.disabled = !this.disabled;
    const dataValue: any = {
      disabled : this.disabled
    };
    this.emitDataValue.emit(dataValue);
  }


  ngOnInit() {}

}
