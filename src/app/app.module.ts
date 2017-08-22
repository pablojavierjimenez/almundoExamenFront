import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavComponent } from './Components/nav/nav.component';
import { BodyComponent } from './Components/body/body.component';
import { BreadcrumComponent } from './Components/breadcrum/breadcrum.component';
import { SearchComponent } from './Components/search/search.component';
import { ResultsComponent } from './Components/results/results.component';
import { HotelListComponent } from './Components/hotel-list/hotel-list.component';
import { FiltersComponent } from './Components/filters/filters.component';
import { SortListComponent } from './Components/sort-list/sort-list.component';
import { HotelsService } from './Services/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    BreadcrumComponent,
    SearchComponent,
    ResultsComponent,
    HotelListComponent,
    FiltersComponent,
    SortListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
