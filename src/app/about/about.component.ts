import { Component,  AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('carousel1') carousel1!: ElementRef;

  ngAfterViewInit() {
    if (this.carousel1) {
      $(this.carousel1.nativeElement).owlCarousel({
        loop: true,
          margin: 20,
          nav: false,
          dots: true, // Enable dots navigation
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 2
              }
      }
    });
  }
}
}