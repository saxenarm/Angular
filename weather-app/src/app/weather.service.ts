import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import {Http,Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService{
	
  constructor(private http: Http) {}
 
  search(name: string): Observable<any> {
  	console.log(name);
    return this.http
               .get("http://api.openweathermap.org/data/2.5/forecast?q="+name+"&cnt=16&id=524901&APPID=e3230fbaa3d4f811544e8a9440d35b9f")
               .map(response => response.json() );
  }
}