import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.css']
})
export class BlogSliderComponent implements OnInit {
  image = [
    'assets/img/1.png', 'assets/img/2.png', 'assets/img/3.jpg', 'assets/img/4.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
