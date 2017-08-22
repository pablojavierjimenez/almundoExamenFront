import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Hotel } from './hotel';
import { HOTELS } from './hotels.mock';

@Injectable()


export class HotelsService {
  private hotelsUrl: string;
  constructor(private _http:Http){ }

  getHotels(){
    this.hotelsUrl = 'http://localhost:3000/api/hotels';
    return this._http.get(this.hotelsUrl)
      .map(res => res.json());
  }
}
