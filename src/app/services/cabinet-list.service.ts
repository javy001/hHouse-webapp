import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class CabinetListService {

    constructor(private http: Http){}
    getCabinetList(): Observable<any>{
         return this.http.get('http://ec2-54-68-139-60.us-west-2.compute.amazonaws.com/app/get_data.php?all')
            .map(response => response.json());

    }
}
