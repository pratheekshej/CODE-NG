import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-grid',
  templateUrl: './n-grid.component.html',
  styleUrls: ['./n-grid.component.scss']
})
export class NGridComponent implements OnInit {

  vesselData: any = [];
  cols: any = [];
  constructor() { }


  setVesselData(): void {
    this.vesselData = [
      { vin: 1, year: 2001, brand: 'XYZ', color: 'Red', price: '5000000', saleDate: '02/02/2001'}
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


  ngOnInit() {
    this.setVesselData();
  }

}
