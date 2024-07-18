import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

    @ViewChild('carousel1') carousel1!: ElementRef;
  @ViewChild('carousel2') carousel2!: ElementRef;
  @ViewChild('carousel3') carousel3!: ElementRef;

  ngAfterViewInit() {
  if (this.carousel1) {
    $(this.carousel1.nativeElement).owlCarousel({
        items: 1,
        loop: true,
        center: true,
        freeDrag: false,
        startPosition: 0,
        autoplay: true,
        autoplayTimeout: 9000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        autoWidth: false,
        margin: 20,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  });

  // Custom navigation buttons
  $('.owl-prev').click(function () {
      $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function () {
      $('.owl-carousel').trigger('next.owl.carousel');
  });
}

if (this.carousel2) {
  $(this.carousel2.nativeElement).owlCarousel({
    items: 1,
    loop: true,
    center: true,
    freeDrag: false,
    startPosition: 0,
    autoplay: true,
    autoplayTimeout: 9000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoWidth: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

// Custom navigation buttons
$('.owl-prev').click(function () {
    $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.owl-next').click(function () {
    $('.owl-carousel').trigger('next.owl.carousel');
});
}

  {
    if (this.carousel3) {
        $(this.carousel3.nativeElement).owlCarousel({
        items: 1,
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
  }

