import { Injectable } from '@angular/core';
import { UserData } from '../user-data';
import { Http, Headers, URLSearchParams } from "@angular/http"
import { Observable } from 'rxjs/Rx';

@Injectable()

export class PostDataService {

  headers = new Headers({'Content-Type': 'application/json'});
  url = 'http://coinsurf.info/catch_data.php';

  constructor(private http: Http) { }
  
  submitData(data) /*: Observable<any> */{
  	console.log(JSON.stringify(data));
  	return this.http.post(
  		this.url,
  		JSON.stringify(data),
  		{ headers: this.headers }
  	).subscribe();
  }
}
