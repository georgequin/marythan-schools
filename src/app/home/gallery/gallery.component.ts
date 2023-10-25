import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  figures = [
    "assets/img/graduation.jpeg",
    "assets/img/group1.jpeg",
    "assets/img/compound.jpeg",
    "assets/img/group2.jpeg"
  ];
  constructor() { }

  ngOnInit() {
  }

}
