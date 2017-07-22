import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class ChartDataService {

    constructor(private http: Http){}
    getData(id,metric): Observable<any>{
         return this.http.get('http://ec2-54-68-139-60.us-west-2.compute.amazonaws.com/app/get_data.php?id='+id+'&metric='+metric)
            .map(response => response.json());
            // http://ec2-54-68-139-60.us-west-2.compute.amazonaws.com/app/get_data.php?id=
            // http://localhost:5555/hHouse/back-end/get_data.php?id=

    }
}
