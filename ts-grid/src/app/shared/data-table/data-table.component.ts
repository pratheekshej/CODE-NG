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
   *  Table cols.
   */
  @Input() cols: any[];

  /**
   * Table actions such ass edit, delete.
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

  @Output() filterGlobal: EventEmitter<any> = new EventEmitter();
  @Output() filterByField: EventEmitter<any> = new EventEmitter();
  @Output() lazyLoadData: EventEmitter<any> = new EventEmitter();
  @Output() editRow: EventEmitter<any> = new EventEmitter();
  @Output() deleteRow: EventEmitter<any> = new EventEmitter();
  @Output() viewRow: EventEmitter<any> = new EventEmitter();


  public _tableRow: any[] = [];
  private _originalData: any[] = [];
  private searchParams = {};


  /**
   * TABLE DATA VALUE SET UP
   */
  @Input('values')
  set valueList(value) {
    if (value) {
      setTimeout(() => {
        this._tableRow = [...value];
        this._tableRow = this._tableRow.slice();
        this._originalData = this._tableRow;
        this.filter();
      }, 50);
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
   * DATA FILTER METHOD
   */
  filter() {
    let dataList = this.values;
    dataList = dataList.filter(
      (item: any) => {
        for (const key in this.searchParams) {
          if (
            typeof item[key] === 'undefined' ||
            (item[key] && item[key].toLowerCase().indexOf(this.searchParams[key].toLowerCase()) === -1)
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


}
