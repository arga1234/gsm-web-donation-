import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.css']
})
export class BlogSliderComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  image = [
    'assets/img/1.png', 'assets/img/2.png', 'assets/img/3.jpg', 'assets/img/4.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
