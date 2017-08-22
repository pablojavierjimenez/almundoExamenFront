import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { HotelsService } from '../../Services/hotels.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.less']
})

export class HotelListComponent implements OnInit {
  // instantiate posts to an empty array
  hotels: any = [];

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    // Retrieve hotels from the API
    this.hotelsService.getAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
}
