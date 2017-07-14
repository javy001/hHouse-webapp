import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class ChartDataService {

    constructor(private http: Http){}
    getTestData(test_id): Observable<any>{
         return this.http.get('http://ec2-54-68-139-60.us-west-2.compute.amazonaws.com/get_data.php?id='+test_id)
            .map(response => response.json());
        // return this.http.get('http://consumer-dev.sv2.trulia.com/dashboards/mobile/get_test_data.php?test_id='+test_id)
        //     .map(response => response.json());

    }
}
