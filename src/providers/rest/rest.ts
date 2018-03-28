import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  year: string; 
  apiKey:string;
  restAPI:string;
  database: string;
  databaseID: string;

  data: any;

  constructor(public http: HttpClient) {

    this.year = "_2018";
    this.database = "galiciencia"
    this.apiKey = "6vFmPWoWi4kcWL9CEQujs5dzEbxs9O8M";
    this.databaseID = "5abb1efa734d1d268cda3599";

    this.restAPI = "https://api.mlab.com/api/1/databases/"
      .concat(this.database
        .concat("/collections/"
          .concat(this.year
              .concat("/"
                .concat(this.databaseID
                  .concat("?apiKey="
                    .concat(this.apiKey)))))));

  }

  getGalicienciaData() {
    return this.http.get(this.restAPI).toPromise();
  }

}