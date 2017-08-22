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
