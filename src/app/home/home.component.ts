import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Les crochets [] permettent le property binding
  // Les accolades {} permettent les "string interpolations"
  //pasta = 'asset/images/';
  //direcitve structurelle : *ngFor
  constructor() { }

  ngOnInit(): void {
  }

}
