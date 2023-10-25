import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses = [
    {date: "Aug 13, 2018", title: "School Opening Timing", news: `School classes start Monday to Friday from 8:00 A.M to 2:00 P.M. Any holiday, functional programme or half-day will be communicated earlier to that event.`},
    {date: "Aug 14, 2018", title: "School Teaching Medium", news: `School subjects are depends on the standard for that class.`},
    {date: "Aug 13, 2018", title: "Best Student Spots in Abuja", news: `Marythan Int' School is an English Medium School and is considered to be Best School in the region.`},
  ];
  constructor() { }

  ngOnInit() {
  }

}
