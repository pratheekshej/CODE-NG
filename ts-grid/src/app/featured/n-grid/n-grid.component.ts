import { CommonService } from './../../services/common/common.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { VesselData } from '../../data-models/vessel-dm.model';

@Component({
  selector: 'app-n-grid',
  templateUrl: './n-grid.component.html',
  styleUrls: ['./n-grid.component.scss']
})
export class NGridComponent implements OnInit, OnChanges {

  vesselData: VesselData[] = [];
  cols: any = [];
  expanded: any = false;

  constructor(
    private commonService: CommonService
  ) {
    this.commonService.setRouteValue('n-grid');
  }


  /**
   * ADD NEW DATA ROW
   */
  addNewDataRow() {
    console.log('Adding New Data Row');
    const newVesselData: VesselData = {
      vin: (this.vesselData.length + 1),
      year: '',
      brand: '',
      color: '',
      price: '',
      saleDate: ''
    };
    this.vesselData = [
      ...this.vesselData,
      newVesselData
    ];
  }


  /**
   * ID generator
   */


  /**
   * SET VESSEL DATA VALUES
   */
  setVesselData(): void {
    this.vesselData = [
      {
        vin: 1,
        year: '2001',
        brand: 'XYZ',
        color: 'Red',
        price: '5000000',
        saleDate: '02/02/2001'
      }
    ];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'price', header: 'Price' },
      { field: 'saleDate', header: 'Sale Date' }
    ];
  }


  showToggler(event: any, row: any): void {
    console.log('Event :> ', event);
    console.log('Row :> ', row);
  }


  deleteDataRow(rowObj: any): void {
    const vesselData: any = [];
    for (const data of this.vesselData) {
      if (rowObj.vin !== data.vin) {
        vesselData.push(data);
      }
    }
    this.vesselData = [];
    this.vesselData = vesselData;
    console.log('Vessel-Data :> ', this.vesselData);
  }


  ngOnInit() {
    this.setVesselData();
  }


  ngOnChanges() {
    console.log('ROW-Data :> ', this.vesselData);
  }


}
