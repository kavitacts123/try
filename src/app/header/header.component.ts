import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderservicesService } from '../headerservices.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHeader = true;

  private hideRoutes = [
    '/booking-form',
    '/form2',
    '/form2/destination',
    '/form2/hotel_list',
    '/form2/date',
    '/form2/rooms',
    '/form2/peoples',
    '/form2/payment'
  ];

  constructor(private router: Router, private headerservicesService: HeaderservicesService) {}

  ngOnInit(): void {
    // Subscribe to header visibility changes from the service
    this.headerservicesService.showHeader$.subscribe(show => {
      this.showHeader = show;
    });

    // Subscribe to router events to hide/show header based on the route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url;
      if (this.hideRoutes.includes(currentRoute)) {
        this.headerservicesService.hideHeader();
      } else {
        this.headerservicesService.showHeader();
      }
    });
  }
}
