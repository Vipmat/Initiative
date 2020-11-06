import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  links = ['home', 'recruiters', 'candidates'];
  activeLink = this.links[0];

  constructor() {}

  ngOnInit(): void {}

  linkClicked(i: number) {
    this.activeLink = this.links[i];
  }
}
