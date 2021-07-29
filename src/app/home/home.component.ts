import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";

import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['','Full-Stack engineer', ' professional WEB developer'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
  downloadFile(){
    let link = document.createElement("a");
    link.download = "ghassen_ibrahim_cv";
    link.href = "assets/pdf/cv.pdf";
    link.click();
}

}
