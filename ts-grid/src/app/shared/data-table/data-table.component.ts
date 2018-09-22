import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableActions } from '../../data-models/data-table.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  /**
   *  TABLE COL VALUES
   */
  @Input() cols: any[];

  /**
   * TABLE ACTIONS : ADD, EDIT & DELETE
   */
  @Input() actions: TableActions;

  /**
   * BASIC INPUT PARAMS
   */
  @Input() title: string;
  @Input() paginator: boolean;
  @Input() enableTranslation: boolean;
  @Input() sort: boolean;
  @Input() enableGlobalFieldFilter: boolean;
  @Input() enableLocalFieldFilter: boolean;
  @Input() loading: boolean;
  @Input() lazyLoad: boolean;
  @Input() rows: any[];
  @Input() scrollable: boolean;
  @Input() scrollHeight: string;

  /**
   * OUTPUT EVENTS
   */
  @Output() filterGlobal: EventEmitter<any> = new EventEmitter();
  @Output() filterByField: EventEmitter<any> = new EventEmitter();
  @Output() lazyLoadData: EventEmitter<any> = new EventEmitter();
  @Output() editRow: EventEmitter<any> = new EventEmitter();
  @Output() deleteRow: EventEmitter<any> = new EventEmitter();
  @Output() viewRow: EventEmitter<any> = new EventEmitter();


  /**
   * TABLE ENTITIES AND ELEMENTS FOR DATA BINDING
   */
  public _tableRow: any[] = [];
  private _originalData: any[] = [];
  private searchParams: any = {};


  /**
   * TABLE DATA-VALUE SETTERS/GETTERS
   */
  @Input('values')
  set valueList(value) {
    if (value) {
      setTimeout(
        () => {
          this._tableRow     = [...value];
          this._tableRow     = this._tableRow.slice();
          this._originalData = this._tableRow;
          this.filter();
        }, 50
      );
    }
  }
  get values() {
    return this._originalData;
  }


  /**
   * CONSTRUCTOR INIT
   * @param activatedRoute
   */
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }


  /**
   * COMPONENT INIT
   */
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (response: any) => {
        for (const index in response) {
          if (response.hasOwnProperty(index)) {
            this.searchParams[index] = response[index];
          }
        }
      }
    );
  }


  /**
   * DATA ON-SEARCH FILTER METHOD
   */
  filter() {
    let dataList = this.values;
    dataList = dataList.filter(
      (item: any) => {
        for (const key in this.searchParams) {
          if (
            typeof item[key] === 'undefined' ||
            ((item[key] && item[key].toLowerCase().indexOf(this.searchParams[key].toLowerCase())) === -1)
          ) {
            return false;
          }
        }
        return true;
      }
    );
    this._tableRow = dataList;
  }


  /**
   * FILTER LOCALLY
   */
  filterLocally(value: any, field: any): void {
    this.filter();
    this.filterByField.emit([value, field]);
  }


  /**
   * CLEAR SEARCH RESULTS
   */
  clear(value, field): void {
    this.filter();
    this.filterByField.emit([value, field]);
  }


}
