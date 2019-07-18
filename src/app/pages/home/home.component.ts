import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedStream;
  isScrolled: boolean;

  constructor() {}

  ngOnInit() {}

  onWindowScroll(event) {
    const number = event.target.scrollTop;

    if (number > 25) {
      this.isScrolled = true;
    } else if (this.isScrolled && number < 10) {
      this.isScrolled = false;
    }
  }

  setStream(item) {
    this.selectedStream = item;
  }
}
