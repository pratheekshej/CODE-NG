import { Injectable } from '@angular/core';
import {CONN_STRING}  from '../../utils/app.config';
import {HttpClient}   from '@angular/common/http';
import {Observable}   from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataErrService {

  jsonFetch: any              = './assets/jsons/';
  hostAPI: any                = CONN_STRING.apiDev;
  urlToFetchErrorData: any    = this.hostAPI+'ValidationErrors/?pageIndex=';
  urlToFetchErrorDetails: any = this.hostAPI+'ErrorColumns/';
  urlToFetchFileNameList: any = this.hostAPI+'QualityErrorFiles';

  constructor(
    private http: HttpClient
  ) {}

  /*
  * Fetch JSON File From Assets
  * */
  fetchJsonData(fileName: any): Observable<any>{
    return this.http.get(this.jsonFetch+fileName).pipe(
      map(
        (response: any) => response
      )
    );
  }


  /*
  * Fetching Error Data From the API
  * */
  fetchErrorData(pageIndex: any, pageSize: any, fileName: any): Observable<any>{
    console.log("URL ::> ", this.urlToFetchErrorData+pageIndex+'&pageSize='+pageSize+'&fileName='+fileName);
    return this.http.get(this.urlToFetchErrorData+pageIndex+'&pageSize='+pageSize+'&fileName='+fileName);
    /*
    * pipe(
      map(
        (response: any) => response
      )
    )
    * */
  }


  /*
  * Fetch Error Detail By Id
  * */
  fetchErrorDetail(errorId: any): Observable<any>{
    console.log("URL ::> ", this.urlToFetchErrorDetails+errorId);
    return this.http.get(this.urlToFetchErrorDetails+errorId);
  }


  /*
  * Fetch Error Detail By Id
  * */
  fetchFileNameList(): Observable<any>{
    console.log("URL ::> ", this.urlToFetchFileNameList);
    return this.http.get(this.urlToFetchFileNameList);
  }


}
