import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataErrService} from '../../services/data-err/data-err.service';

@Component({
  selector: 'app-err-detail',
  templateUrl: './err-detail.component.html',
  styleUrls: ['./err-detail.component.scss']
})
export class ErrDetailComponent implements OnInit {

  errorDataId: any;
  errStackArray: any = [];
  positionArray: any = [];
  errorDataObject: any = {
    name          : "",
    positionTitle : "",
    office        : "",
    age           : ""
  };

  constructor(
    private dataErrService: DataErrService,
    private activatedRoute: ActivatedRoute
  ){}


  getPositiontitle(positionTitle: any): void{
    console.log("Position-Title::>", positionTitle);
    for(let position of this.positionArray){
      if(positionTitle===position.titleId){
        return position.title;
      }
    }
  }


  /*
  * fetch the error data with the id
  * */
  obtainErrorData(): void{
    for(let error of this.errStackArray){
      if(Number(error.id)===Number(this.errorDataId)){
        //this.errorDataObject = error;
        let position = this.getPositiontitle(error.position);
        this.errorDataObject = {
          id       : error.id,
          name     : error.name,
          position : position,
          office   : error.office,
          age      : error.age
        };
        break;
      }
    }
    console.log("Error-Object ::> ", this.errorDataObject);
  }


  /*
  * PositionArray Fetch
  * */
  fetchPositionList(): void {
    this.dataErrService.fetchJsonData('position.json').subscribe(
      (response: any) => {
        this.positionArray = response;
      },
      (error: any) => {
        console.log("Error Response ::> ", error);
      },
      () => {
        console.log("Position Fetch Complete!");
        console.log("Position Array ::> ", this.positionArray);
        this.obtainErrorData();
      }
    );
  }


  /*
  * Load all the Error Data From Table
  * */
  fetchErrStackData(): void {
    this.dataErrService.fetchJsonData('err-grid.json').subscribe(
      (response: any) => {
        this.errStackArray = response;
      },
      (error: any) => {
        console.log("Error Response ::> ", error);
      },
      () => {
        this.fetchPositionList();
      }
    );
  }


  /*
  * Initializing Err-Detail Component
  * */
  ngOnInit() {
    this.errorDataId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchErrStackData();
  }

}
