import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-profile-editor',
  templateUrl: './name-profile-editor.component.html',
  styleUrls: ['./name-profile-editor.component.css']
})
export class NameProfileEditorComponent implements OnInit {

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  ngOnInit() {
  }

}
