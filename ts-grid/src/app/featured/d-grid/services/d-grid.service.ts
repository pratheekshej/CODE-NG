import { ColumnModel } from './../../../data-models/data-table.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DGridService {

  columns: ColumnModel[] = [];
  typeWidth: any = '210px';
  filterWidth: any = '100%';

  constructor() { }

  getColumnData(): ColumnModel[] {
    this.columns = [
      {
        field: 'slNo',
        header: 'SL NO',
        typeWidth: '50px'
      },
      {
        field: 'vesselName',
        header: 'Vessel Name',
        filterType: 'input',
        typeWidth: this.typeWidth,
        filterWidth: this.filterWidth,
        filterPlaceholder: 'Vessel Name'
      },
      {
        field: 'owner',
        header: 'Owner',
        filterType: 'input',
        typeWidth: this.typeWidth,
        filterWidth: this.filterWidth,
        filterPlaceholder: 'Owner'
      },
      {
        field: 'imoNo',
        header: 'IMO#',
        filterType: 'input',
        typeWidth: this.typeWidth,
        filterWidth: this.filterWidth,
        filterPlaceholder: 'IMO'
      },
      {
        field: 'flag',
        header: 'Flag'
      },
      {
        field: 'kingOfShip',
        header: 'Kind of Ship'
      },
      {
        field: 'action',
        header: 'Action',
        typeWidth: '125px',
      },
    ];
    return this.columns;
  }

}
