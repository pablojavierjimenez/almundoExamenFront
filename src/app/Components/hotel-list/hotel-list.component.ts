import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { Hotel } from '../../Services/hotel';
import { HotelsService } from '../../Services/hotels.service';
import { HOTELS } from '../../Services/hotels.mock';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.less'],
  providers: [HotelsService]
})

export class HotelListComponent  {
  title = 'Tour of Hotel';
  hotels: Hotel[];
  constructor(private _heroService:HotelsService){
    this.getHotels();
    this.hotels = [
      {
        "id":"1",
        "name":"Hotel Emperador",
        "stars":"3",
        "price":"1596"
      },
      {
        "id":"2",
        "name":"Petit Palace San Bernardo",
        "stars":"4",
        "price":"2145"
      },
      {
        "id":"3",
        "name":"Hotel Nuevo Boston",
        "stars":"2",
        "price":"861"
      },
      {
        "id":"4",
        "name":"Royal Hotel",
        "stars":"3",
        "price":"1596"
      },
      {
        "id":"5",
        "name":"Green Garden Hotel",
        "stars":"4",
        "price":"2145"
      },
      {
        "id":"6",
        "name":"The Westin Palace Madrid",
        "stars":"5",
        "price":"861"
      }
    ];
  }

  getHotels() {
      this._heroService.getHotels()
          .subscribe(res => {
              this.hotels = res;
          },
          err => {
              console.log('Error ' + err.status + ' occurred:', err.statusText);
          }
      )
  }
}
