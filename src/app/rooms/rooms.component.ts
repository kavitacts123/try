// rooms.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms: { roomType: string, roomNumber: string }[] = []; // Ensure each room object has roomType and roomNumber properties
  roomTypes: string[] = ['Standard', 'Deluxe', 'Suite', 'Family Room'];

  constructor(private router: Router) {}

  addRoom() {
    this.rooms.push({ roomType: '', roomNumber: '' }); // Initialize roomType and roomNumber for each new room
  }

  removeRoom(index: number) {
    this.rooms.splice(index, 1);
  }

  submitRooms() {
    // Here you can handle form submission logic
    if (this.roomsFormIsValid()) {
      console.log('Form submitted:', this.rooms);
      // Perform further actions like saving to backend or navigating
    } else {
      console.error('Form is invalid');
    }
  }

  roomsFormIsValid(): boolean {
    // Validate each room in the rooms array
    for (let i = 0; i < this.rooms.length; i++) {
      const room = this.rooms[i];
      if (!room.roomType || !room.roomNumber) {
        return false;
      }
    }
    return true;
  }
}