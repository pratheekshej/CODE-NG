import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common/common.service';
import { ColumnModel } from '../../data-models/data-table.model';
import { GridDataContent } from './d-grid.model';

@Component({
  selector: 'app-d-grid',
  templateUrl: './d-grid.component.html',
  styleUrls: ['./d-grid.component.scss']
})
export class DGridComponent implements OnInit {

  vesselData: GridDataContent[] = [];
  cols: ColumnModel[] = [];


  constructor(
    private commonService: CommonService
  ) { }


  setColumns(): void {
    this.cols = [];
    this.cols = [
      { field: 'vesselName', header: 'Vessel Name', filterType: 'input' },
      { field: 'owner', header: 'Owner', filterType: 'Twice' },
      { field: 'imoNo', header: 'IMO#' },
      { field: 'flag', header: 'Flag' },
      { field: 'kingOfShip', header: 'King Of Ship' },
      { field: 'action', header: 'Action' },
    ];
  }


  ngOnInit() {
    let vesselData = [];
    this.vesselData = [];
    this.commonService.getJsonData('data').subscribe(
      (res: any) => {
        res.forEach(
          (obj) => {
            vesselData = [...vesselData, obj];
          }
        );
        console.log('Vessel Data :> ', this.vesselData);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        console.log('Json Data has been pulled up!');
        this.setColumns();
      }
    );
  }

}
