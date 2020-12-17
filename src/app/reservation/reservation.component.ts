import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm: FormGroup; //Pour rattacher ce formulaire du côté HTML au nom de reservation Form
  date = new Date();

  timeOptions = ["12:00","12:30","13:00","13:30","19:00","19:30","20:00","20:30","21:00","21:30"];
  peopleOptions = [1,2,3,4,5,6,7,8];

  isScheduleOk = false;

  client = { firstName: '', lastName: '', email: '', phone: ''};

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: "",
      people: 1
    })
  }

  finalizeReservation(formValue){
    console.log(formValue);
  }

  saveReservation(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm);
      this.isScheduleOk = true; //Fera disparaitre l'autre formulaire définit dans l'HTML

    }
  }

}
