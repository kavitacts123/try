import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService  {
  private hotels = [
    { id: 1, name: 'Aether Haven' },
    { id: 2, name: 'Palm Paradise' },
    { id: 3, name: 'Blissful Haven' },
    { id: 4, name: 'Blissful Retreat' },
    // Add more hotels as needed
  ];

  constructor() { }

  getHotels(): Observable<any[]> {
    // Simulate fetching hotels from an API or other data source
    return of(this.hotels);
  }
}