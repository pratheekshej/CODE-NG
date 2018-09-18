import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataErrService} from '../../../services/data-err/data-err.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ErrGridComponent} from '../../../partials/err-grid/err-grid.component';

@Component({
  selector: 'app-ac-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() public errStackArray: any;
  @Input() public itemObject: any;
  @Output() public arrayGenerated: any = new EventEmitter();
  @Output() public newObjectCited: any = new EventEmitter();

  @ViewChild(ErrGridComponent) errorGridComponent: ErrGridComponent;

  constructor(
    private dataErrService: DataErrService,
    private spinner: NgxSpinnerService,
  ) {}

  filterProcessTransactionEventData(errorEventData: any): Array<any> {
    const newObjectCited: any = {};
    errorEventData.filter(
      (event: any) => {
        if (typeof event.FieldName !== null) {
          const fieldName: any      = event.FieldName;
          newObjectCited[fieldName] = event.ColumnValue;
        }
      }
    );
    this.newObjectCited.emit(newObjectCited);
    return errorEventData;
  }

  expandErrRow(errData: any): void {
    let errorEventIdList: any = [];
    this.selectRow(errData);
    this.dataErrService.fetchErrorDetail(errData.ProcessTransactionEventID).subscribe(
      (response: any) => {
        errorEventIdList = response;
      },
      (error: any) => {
        console.log('Error In Fetching Error-Data');
        const ptId: any = errData.ProcessTransactionEventID;
        this.errorGridComponent.modal.errorMessage = 'Something went wrong while fetching results for ID:' + ptId;
        this.errorGridComponent.errorModal.show();
      },
      () => {
        console.log('PTE-ID Fetch successful!');
        this.arrayGenerated.emit(this.filterProcessTransactionEventData(errorEventIdList));
      }
    );
  }

  selectRow(rowData: any): void {
    for (const data of this.errStackArray) {
      data.newObj   = false;
      data.editable = false;
      if (rowData.ProcessTransactionEventID === data.ProcessTransactionEventID) {
        rowData.newObj = true;
      }
    }
  }

  ngOnInit() {}

}
