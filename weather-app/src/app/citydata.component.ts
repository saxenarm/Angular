import {Component, OnInit} from '@angular/core';
import {Http,Response} from '@angular/http';
import {WeatherService} from './weather.service'

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {FavouritesService} from './favourite.service';
import {Favourite} from './favourite.component';
import 'rxjs/add/operator/switchMap';
@Component({
selector:'citydata',
templateUrl: './Citydata.component.html',
 styleUrls: [ './Citydata.component.css' ]
 

 })
export class CityDataComponent {
	data:any={};
cityId='';
	constructor(
  private weatherservice: WeatherService,
  private route: ActivatedRoute,
  private location: Location,private favsservice:FavouritesService
) {
//this.route.paramMap.subscribe(params=>this.searchCity(params['cityName']));
}
	//constructor(private weatherservice: WeatherService) {}
	fav={CityId:"",CityName:"",Description:"",DateTime:"",Humidity:"",Temperature:"",pressure:""};
	error:any='';
e:'Enter value';
p:number=1;
cityName : '';
	ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.weatherservice.search(params.get('name')))
    .subscribe(element=>{
	console.log(this.cityName=element.city.name);
	console.log(this.cityId=element.city.id);
	console.log(element);
	this.data=element;
	// this.cityName=element.city.name;
	// this.cityId=element.city.id;


} );
}
addfavourite(list:any){
this.fav.CityId=this.cityId;
this.fav.CityName=this.cityName;
this.fav.Description=list.weather[0].description;
this.fav.Humidity=list.main.humidity;
this.fav.DateTime=list.dt_txt;
//this.fav.icon=list.weather[0].icon;
this.fav.pressure=list.main.pressure;
this.fav.Temperature=list.main.temp;
console.log(this.fav.Temperature);
       
       this.favsservice.create(this.fav);
}




}