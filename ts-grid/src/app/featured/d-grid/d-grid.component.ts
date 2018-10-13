import { DGridService } from './services/d-grid.service';
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
    private dGridService: DGridService,
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
    this.columns = this.dGridService.getColumnData();
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
