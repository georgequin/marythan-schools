import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyA7ulB9HSNlu8XigaYTEI0Oj2PCB8rM-yY",
      authDomain: "marythan-school.firebaseapp.com",
      projectId: "marythan-school",
      storageBucket: "marythan-school.appspot.com",
      messagingSenderId: "1043526523301",
      appId: "1:1043526523301:web:c24e84476fc9d43369b04c",
      measurementId: "G-K4TBK9HT8B"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app)
  }
  title = 'Marythan International School';
  email = "info.marythanintschool.com";
  tel = "+2348036272357";

  socialUrls = [
    {icon: "facebook", url: "https://www.facebook.com"},
    {icon: "twitter", url: "https://www.twitter.com"},
    {icon: "linkedin", url: "https://www.linkedin.com"}
  ];


}
