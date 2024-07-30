import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FooterservicesService } from '../footerservices.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Corrected from styleUrl to styleUrls
})
export class FooterComponent implements OnInit {
  showFooter = true;

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

  constructor(private router: Router, private footerService: FooterservicesService) {}

  ngOnInit(): void {
    // Subscribe to footer visibility changes from the service
    this.footerService.showFooter$.subscribe(show => {
      this.showFooter = show;
    });

    // Subscribe to router events to hide/show footer based on the route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url;
      if (this.hideRoutes.includes(currentRoute)) {
        this.footerService.hideFooter();
      } else {
        this.footerService.showFooter();
      }
    });
  }
}
