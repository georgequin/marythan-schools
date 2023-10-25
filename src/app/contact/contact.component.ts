import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  email = "info.marythanintschool.com";
  tel = "+2348036272357";
  ngOnInit() {
  }

}
