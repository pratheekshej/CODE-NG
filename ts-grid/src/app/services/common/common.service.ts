import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  jsonLocationPath: any = 'assets/json-data/';

  constructor(
    private http: HttpClient
  ) { }


  getJsonData(jsonName: any): Observable<any> {
    const jsonFileName: any = this.jsonLocationPath + jsonName + '.json';
    return this.http.get(jsonFileName);
  }


}
