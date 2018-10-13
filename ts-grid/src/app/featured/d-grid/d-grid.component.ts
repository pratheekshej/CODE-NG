import { TableActions } from './../../data-models/data-table.model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common/common.service';
import { ColumnModel } from '../../data-models/data-table.model';
import { GridDataContent } from './d-grid.model';
import { Router } from '@angular/router';

class SearchParams {
  constructor(
    public vesselName?: string,
    public owner?: string,
    public imoNo?: string
  ) {}
}

@Component({
  selector: 'app-d-grid',
  templateUrl: './d-grid.component.html',
  styleUrls: ['./d-grid.component.scss']
})
export class DGridComponent implements OnInit {

  searchParams: SearchParams = new SearchParams();
  vesselData: GridDataContent[] = [];
  columns: ColumnModel[] = [];
  actions: TableActions = {
    view: 'View',
    delete: true,
    edit: true
  };


  constructor(
    private commonService: CommonService,
    private _router: Router
  ) {
    this.commonService.setRouteValue('d-grid');
  }


  filter(event: any) {
    console.log('Filter EVENT in D-GRID :> ', event, this.searchParams);
    switch (event[1]) {
      case 'vesselName': this.searchParams.vesselName = event[0];
        break;
      case 'owner': this.searchParams.owner = event[0];
        break;
      case 'imoNo': this.searchParams.imoNo = event[0];
        break;
    }
    this._router.navigate(
      ['/d-grid'],
      {
        queryParams: this.searchParams
      }
    );
  }


  setColumns(): void {
    this.columns = [];
    this.columns = [
      { field: 'slNo', header: 'SLNO', typeWidth: '65px' },
      { field: 'vesselName',
        header: 'Vessel Name',
        filterType: 'input',
        typeWidth: '150px',
        filterWidth: '100%',
        filterPlaceholder: 'Vessel Name'
      },
      {
        field: 'owner',
        header: 'Owner',
        filterType: 'input',
        typeWidth: '150px',
        filterWidth: '100%',
        filterPlaceholder: 'Owner'
      },
      {
        field: 'imoNo',
        header: 'IMO#',
        filterType: 'input',
        typeWidth: '150px',
        filterWidth: '100%',
        filterPlaceholder: 'IMO'
      },
      { field: 'flag', header: 'Flag' },
      { field: 'kingOfShip', header: 'Kind of Ship' },
      { field: 'action', header: 'Action' },
    ];
  }


  ngOnInit() {
    this.vesselData = [];
    this.commonService.getJsonData('data').subscribe(
      (res: any) => {
        res.forEach(
          (obj) => {
            this.vesselData = [...this.vesselData, obj];
          }
        );
        console.log('Vessel Data :> ', this.vesselData);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.setColumns();
        console.log('Json Data has been pulled up!');
      }
    );
  }

}
