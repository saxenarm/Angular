import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {RouterModule,Router,ActivatedRoute} from '@angular/router';
@Component({
 selector: 'app-root',
  templateUrl:'./app.component.html',
 styleUrls: ['./app.component.css']

})

export class AppComponent {
     constructor(private router: Router, private route: ActivatedRoute) {}
  search(term:string) {

  this.router.navigate(['/Citydata/term']); 

}
 title = 'Weather app';
}