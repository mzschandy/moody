import { Component, OnInit } from '@angular/core';
import { moods } from '../../model/moods';
declare function initScroller(): any;
declare function test(): any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moods = moods

  constructor() { }
  ngOnInit(): void {
    initScroller();
    test();
  }

}