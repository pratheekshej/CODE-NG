import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective, PageChangedEvent} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {DataErrService} from '../../services/data-err/data-err.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormElementsComponent} from '../../components/for-error-grid/form-elements/form-elements.component';

@Component({
  selector: 'app-err-grid',
  templateUrl: './err-grid.component.html',
  styleUrls: ['./err-grid.component.scss']
})
export class ErrGridComponent implements OnInit {


  /*
  * MODAL POP-UPS
  * */
  @ViewChild('childModal') public errorModal: ModalDirective;
  @ViewChild(FormElementsComponent) formElements: FormElementsComponent;


  /*
  * VARIABLES
  * */
  errStackArray: any     = [];
  returnedArray: any     = [];
  arrayGenerated: any    = [];
  displayCard: any   = false;
  expandArea: any    = false;
  itemObject: any        = {
    pageNumber   : 0,
    pageIndex    : 1,
    totalItems   : 0,
    gridTotal    : 0,
    startItem    : 0,
    endItem      : 10,
    defaultLimit : 10
  };
  newObjectCited: any    = {};
  display: any           = {
    entitiesWithList : false
  };
  errorObject: any       = {};
  modal: any             = {
    errorMessage   : '',
    successMessage : '',
    promptMessage  : ''
  };
  file: any              = {
    fileName  : '',
    fileArray : []
  };
  fileTyeArray: any      = [
    'Invalid FAM',
    'Invalid Language',
    'Invalid GAC',
    'Invalid BusinessArea'
  ];
  gridErrorOnChange: any = {
    reload: false,
  };
  errorMsgObj: any;


  /*
  * DEPENDENCY INJECTION VIA CONSTRUCTOR
  * */
  constructor(
    private dataErrService: DataErrService,
    private spinner: NgxSpinnerService,
    private route: Router
  ) {}


  /*
  * Filter Process Transaction Event-Data
  * */
  filterProcessTransactionEventData(errorEventData: any): Array<any> {
    /*console.log("ERROR-EVENT-DATA ::> ", errorEventData);*/
    this.newObjectCited = {};
    errorEventData.filter(
      (event: any) => {
        if (typeof event.FieldName !== null) {
          const fieldName: any           = event.FieldName;
          this.newObjectCited[fieldName] = event.ColumnValue;
        }
      }
    );
    console.log('NEW-OBJECT-CREATED ::> ', this.newObjectCited);
    return errorEventData;
  }


  /*
  * Processing Derived Array Items
  * */
  processArrayItems(arrayElems: any): void {
    console.log('ARRAY-ITEMS ::> ', arrayElems);
    arrayElems.forEach(
      (object: any) => {
        object.editable = false;
        object.newObj   = false;
      }
    );
  }


  /*
  * Expand Err Row
  * */
  expandErrRow(errData: any): void {
    let errorEventIdList: any = [];
    this.selectRow(errData);
    this.dataErrService.fetchErrorDetail(errData.ProcessTransactionEventID).subscribe(
      (response: any) => {
        errorEventIdList = response;
      },
      (error: any) => {
        console.log('Error In Fetching Error-Data');
        this.modal.errorMessage = 'Something went wrong while fetching results for ID:' + errData.ProcessTransactionEventID;
        this.errorModal.show();
      },
      () => {
        console.log('PTE-ID Fetch successful!');
        this.arrayGenerated = this.filterProcessTransactionEventData(errorEventIdList);
      }
    );
    this.displayCard = true;
    // this.route.navigate(['/error', errData.id]);
  }


  /*
  * Fetch File Name List
  * */
  fetchFileNameList(): void {
    this.dataErrService.fetchFileNameList().subscribe(
      (response: any) => {
        this.file.fileArray = response;
      },
      (error: any) => {
        console.log('Error in Fetching File List!');
        this.spinner.hide();
      },
      () => {
        this.expandErrRow(this.errStackArray[0]);
        this.spinner.hide();
      }
    );
  }


  /*
  * Check for Error in Response Data
  * */
  checkForErrorsInSuccessCallBack(response): void {
    if (response == null) {
      this.gridErrorOnChange.reload = true;
      this.spinner.hide();
      this.modal.errorMessage = 'API response seems to be NULL. Your grid will be reloaded!';
      this.errorModal.show();
    } else {
      this.gridErrorOnChange.reload = false;
      this.errorObject              = response;
      this.errStackArray            = response.ErrorList; /*this.returnedArray = response.ErrorList;*/
      this.itemObject.totalItems    = response.PageCount;
      this.processArrayItems(this.errStackArray);
    }
  }


  /*
  * Fetch Error Stack Data
  * */
  fetchErrStackData(index: any, limit: any, fileName: any): void {
    this.spinner.show();
    this.dataErrService.fetchErrorData([index], [limit], [this.file.fileName]).subscribe(
      (response: any) => {
        this.checkForErrorsInSuccessCallBack(response);
      },
      (error: any) => {
        this.fetchFileNameList();
        this.modal.errorMessage = 'Oops! Something went wrong!';
        this.errorModal.show();
      },
      () => {
        this.fetchFileNameList();
      }
    );
  }


  /*
  * Fetch Error Stack Data On Page Change Or FileName Selection
  * */
  fetchErrorStackDataForFileOrPageSelection(index: any, limit: any, fileName: any): void {
    this.spinner.show();
    this.dataErrService.fetchErrorData([index], [limit], [fileName]).subscribe(
      (response: any) => {
        this.checkForErrorsInSuccessCallBack(response);
      },
      (error: any) => {
        console.log('Error Response ::> ', error);
        this.spinner.hide();
        this.modal.errorMessage = 'Oops! Something went wrong!';
        this.errorModal.show();
      },
      () => {
        this.expandErrRow(this.errStackArray[0]);
        this.spinner.hide();
      }
    );
  }


  /*
  * On Page Change
  */
  pageChanged(event: PageChangedEvent): void {
    this.spinner.show();
    this.itemObject.pageNumber = event.page - 1;
    const startItem            = (event.page - 1) * event.itemsPerPage;
    this.itemObject.startItem  = startItem;
    const endItem              = event.page * event.itemsPerPage;
    this.itemObject.endItem    = endItem;
    /*this.returnedArray         = this.errStackArray.slice(this.itemObject.startItem, this.itemObject.endItem);*/
    console.log('FILE-NAME ::> ', this.file.fileName);
    this.fetchErrorStackDataForFileOrPageSelection(
      [event.page],
      [this.itemObject.defaultLimit],
      [this.file.fileName]
    );
  }


  /*
  * Selecting a file-name from the drop-down
  * */
  selectFileToLoad(): void {
    console.log(':: File-Selection ::');
    console.log(
      [this.itemObject.pageIndex],
      [this.itemObject.defaultLimit],
      [this.file.fileName]
    );
    this.fetchErrorStackDataForFileOrPageSelection(
      [this.itemObject.pageIndex],
      [this.itemObject.defaultLimit],
      [this.file.fileName]
    );
  }


  /*
  * Modal Hide
  * */
  modalHide() {
    if (this.gridErrorOnChange.reload) {
      this.file.fileName = '';
      this.fetchErrStackData(
        [this.itemObject.pageIndex],
        [this.itemObject.defaultLimit],
        [this.file.fileName]
      );
    } else {
      setTimeout(
        () => {
          this.route.navigate(['/welcome']);
        }, 500
      );
    }
  }


  /*
  * Row Selection For Style
  * */
  selectRow(rowData: any): void {
    for (const data of this.errStackArray) {
      data.newObj   = false;
      data.editable = false;
      if (rowData.ProcessTransactionEventID === data.ProcessTransactionEventID) {
        rowData.newObj = true;
      }
    }
  }


  /*...*/
  see(errorMessageObj: any): void {
    // console.log('FROM Form Component ::> ', this.formElements.newObjectCited);
    this.errorMsgObj = errorMessageObj;
    this.modal.errorMessage = errorMessageObj.errorMessage;
    // this.errorModal.show();
  }


  /*
  * Initializing the APP
  * */
  ngOnInit() {
    this.fetchErrStackData(
      [this.itemObject.pageIndex],
      [this.itemObject.defaultLimit],
      [this.file.fileName]
    );
  }


}
