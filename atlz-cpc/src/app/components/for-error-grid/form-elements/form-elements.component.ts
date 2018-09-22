import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from '../../modal/modal.component';
// import {ErrGridComponent} from '../../../partials/err-grid/err-grid.component';

@Component({
  selector: 'app-ac-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  @ViewChild(ModalComponent) modalComponent: ModalComponent;

  @Input() public arrayGenerated: any;
  @Input() public newObjectCited: any;
  @Output() public openModel: any = new EventEmitter();

  expandArea: any = false;


  constructor() {}


  see(): void {
    console.log('NEW-OBJECT-CREATED ::> ', this.newObjectCited);
    const modalMsgObj: any = {
      modalMessage : 'This error message has been initiated from form-elements component!'
    };
    this.openModel.emit(modalMsgObj);
    // this.modalComponent.errorModal.show();
  }


  ngOnInit() {}

}
