import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {CityDataComponent} from './citydata.component';
import {RouterModule} from '@angular/router';
import {WeatherService} from './weather.service';
import {WeatherGalleryComponent} from './weatherGallery.component';
import { AppRoutingModule }     from './app.routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FavouritesService} from './favourite.service';
@NgModule({
  declarations: [
    AppComponent,
    CityDataComponent,
    WeatherGalleryComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule


  ],
  providers: [WeatherService,FavouritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
