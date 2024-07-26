import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']  // Adjust the path if you have a CSS file
})
export class HotelListComponent {
  hotels: any[];  // Assuming hotels is an array of objects with 'name' and 'rating' properties

  constructor() {
    // Initialize hotels array with dummy data (replace with actual data loading logic)
    this.hotels = [
      { name: 'Aether Haven', rating: 4 },
      { name: 'Blissful Retreat', rating: 5 },
      { name: 'Four Seasons', rating: 3 },
      // Add more hotels as needed
    ];

    // Enhance each hotel object with a 'ratingStars' property
    this.hotels.forEach(hotel => {
      hotel.ratingStars = Array(hotel.rating).fill('star');  // Creates an array of 'star' strings based on rating
    });
  }
}