import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team = [
    {image: "assets/img/proprietress.jpeg", name: "Mrs Mary Itodo", profession: "Proprietress", description: "A qualified educationist. For further details contact us or visit us at Marythan Int'l School", facebook: '', twitter: '', googlePlus: '', linkedin: ''},
    {image: "assets/img/teacher1.png", name: "Mrs Victoria", profession: "Head Teacher", description: "An B.Ed qualified staff. For further details contact us or visit us at Marythan Int'l School", facebook: '', twitter: '', googlePlus: '', linkedin: ''},
    ];

  constructor() { }

  ngOnInit() {
  }

}
