import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-d-grid',
  templateUrl: './d-grid.component.html',
  styleUrls: ['./d-grid.component.scss']
})
export class DGridComponent implements OnInit {

  vesselData: any = [];
  cols: any = [];


  constructor(
    private commonService: CommonService
  ) { }


  setColumns(): void {
    this.cols = [];
    this.cols = [
      {
        field: 'vesselName',
        header: 'Vessel Name'
      },
      {
        field: 'owner',
        header: 'Owner'
      },
      {
        field: 'imoNo',
        header: 'IMO#'
      },
      {
        field: 'flag',
        header: 'Flag'
      },
      {
        field: 'kingOfShip',
        header: 'King Of Ship'
      }
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
        console.log('Json Data has been pulled up!');
        this.setColumns();
      }
    );
  }

}
