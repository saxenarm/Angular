import { Injectable } from '@angular/core';
import {  Favourite} from './favourite.component';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FavouritesService {
private FavUrl = 'http://localhost:52609/api/Home';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }
 
create(Favourite:Favourite){
      return this.http
        .post(this.FavUrl, Favourite,{headers: this.headers}).subscribe();
        
    }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}