import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterservicesService {
  private showFooterSubject = new BehaviorSubject<boolean>(true);
  showFooter$ = this.showFooterSubject.asObservable();

  hideFooter(): void {
    this.showFooterSubject.next(false);
  }

  showFooter(): void {
    this.showFooterSubject.next(true);
  }
}
