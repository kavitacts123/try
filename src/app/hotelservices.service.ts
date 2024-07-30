import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderservicesService {
  private showNavbarSubject = new BehaviorSubject<boolean>(true);
  showNavbar$ = this.showNavbarSubject.asObservable();

  hideNavbar(): void {
    this.showNavbarSubject.next(false);
  }

  showNavbar(): void {
    this.showNavbarSubject.next(true);
  }
}
