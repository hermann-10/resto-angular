import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  standard = { 
    firstName: 'Benjamin',
    lastName: 'Mendes',
    role: 'Serveur',
    award: '',
    phoneNumber: '0764536734'
  };

  sommelier = { 
    firstName: 'David',
    lastName: 'Ribeiro',
    role: 'Gérant',
    award: 'Meilleur dirigeant',
    phoneNumber: '0794565347'
  };

  boucher = { 
    firstName: 'Raul',
    lastName: 'Gutierrez',
    role: 'Boucher',
    award: 'Meilleur boucher',
    phoneNumber: '07998765542'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
