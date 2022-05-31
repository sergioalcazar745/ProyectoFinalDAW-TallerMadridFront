import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.log("pedro")
    if(localStorage.getItem("reload") == "false"){
      console.log("pedro")
      localStorage.clear()
      window.location.reload();
    }
  }
}
