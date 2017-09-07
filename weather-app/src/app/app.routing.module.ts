import {CityDataComponent} from './citydata.component';
import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WeatherGalleryComponent} from './weatherGallery.component';

const routes:Routes=[
 { path: '', redirectTo: '/Citydata/Noida', pathMatch: 'full' },
 {path:'Citydata/:name', component:CityDataComponent },
{path:'Citydata', component:CityDataComponent },
{path:'Home', component:AppComponent},
{path:'Gallery',component:WeatherGalleryComponent}
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports:[RouterModule]
})


export class AppRoutingModule{}