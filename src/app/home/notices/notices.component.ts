import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {


  notices = [
    {date: "Oct 28, 2023", notice: "Unavailability of School Bus. Due to technical issues, our school bus will be unavailable. "},
    {date: "Auguet 16, 2023", notice: "As per Govt. directive, school will remain close on August 17, due to fuel scarcity"},
    {date: "August 14, 2023", notice: "There will be a functional programme on Independence Day, Oct 1, 2023. So there is no classes there."},
    {date: "July 17, 2023", notice: "Effective 1st Nov 2023 Attendance is Essential. Parents are advised to bring their children to school early"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
