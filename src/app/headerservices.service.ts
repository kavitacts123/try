import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderservicesService {
  private showHeaderSubject = new BehaviorSubject<boolean>(true);
  showHeader$ = this.showHeaderSubject.asObservable();

  // Method to hide the header
  hideHeader(): void {
    this.showHeaderSubject.next(false);
  }

  // Method to show the header
  showHeader(): void {
    this.showHeaderSubject.next(true);
  }
}
