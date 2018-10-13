import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  jsonLocationPath: any = 'assets/json-data/';
  routerValue: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(
    private http: HttpClient
  ) { }


  getJsonData(jsonName: any): Observable<any> {
    const jsonFileName: any = this.jsonLocationPath + jsonName + '.json';
    return this.http.get(jsonFileName);
  }

  setRouteValue(routeValue: any): void {
    this.routerValue.next(routeValue);
  }


}
