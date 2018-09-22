import {Component, OnInit, ViewChild, OnChanges, Input} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-ac-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {

  @ViewChild('errorModal') public errorModal: ModalDirective;

  @Input() public openModelDiv;

  modal: any = {
    errorMessage: ''
  };

  constructor() { }

  see(modalMessage: any): void {
    console.log('INSIDE-MODAL-COMP::', modalMessage);
    this.modal.errorMessage = modalMessage;
    this.errorModal.show();
  }

  ngOnInit() {}

  ngOnChanges() {
    if (typeof this.openModelDiv !== 'undefined') {
      this.modal.errorMessage = this.openModelDiv.modalMessage;
      this.errorModal.show();
    }
  }

}
