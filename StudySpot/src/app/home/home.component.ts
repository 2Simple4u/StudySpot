import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {
      imageSrc:
        'https://c0.wallpaperflare.com/preview/722/962/382/learn-student-laptop-internet.jpg',
      imageAlt: 'course1',
    },
    {
      imageSrc:
        'https://static.vecteezy.com/system/resources/previews/001/937/817/original/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-with-books-lecture-pencil-the-classroom-training-course-library-illustration-flat-vector.jpg',
      imageAlt: 'course2',
    },
    {
      imageSrc:
        'https://c1.wallpaperflare.com/preview/29/608/967/power-know-board-learn.jpg',
      imageAlt: 'course3',
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/b/colorful-e-learning-sketch-blurry-room-creative-online-education-drawn-over-living-background-concept-modern-183836872.jpg',
      imageAlt: 'course4',
    },
    {
      imageSrc:
        'https://c0.wallpaperflare.com/preview/550/573/147/business-concept-consulting-illustration.jpg',
      imageAlt: 'course5',
    },
    {
      imageSrc:
        'https://c1.wallpaperflare.com/preview/191/969/141/dictionary-online-technology-internet.jpg',
      imageAlt: 'course6',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'course7',
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
