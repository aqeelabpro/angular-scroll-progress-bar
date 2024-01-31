import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-progress-bar',
  templateUrl: './scroll-progress-bar.component.html',
  styleUrls: ['./scroll-progress-bar.component.css'],
})
export class ScrollProgressBarComponent implements OnInit {
  scrollPercentage: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollPercentage = (scrollOffset / windowHeight) * 100;
  }
  constructor() {}

  ngOnInit() {}
}
