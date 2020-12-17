import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input()
  user: any;

  @Output()
  zoom = new EventEmitter<string>(); //émettre un événement qui s'appelle Zoom

  constructor() { }

  ngOnInit() {
  }

  displayNumber(){
    this.zoom.emit(this.user.phoneNumber);
  }

}
