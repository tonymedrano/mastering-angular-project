import { Component, OnInit } from '@angular/core';

import { SuperheroMessageService } from "../superhero-message.service";

@Component({
  selector: 'app-superhero-messages',
  templateUrl: './superhero-messages.component.html',
  styleUrls: ['./superhero-messages.component.css']
})
export class SuperheroMessagesComponent implements OnInit {

  constructor(public superheroMessageService: SuperheroMessageService) { }

  ngOnInit() {
  }

}
