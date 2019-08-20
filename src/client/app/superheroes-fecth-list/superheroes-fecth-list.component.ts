import { Component, OnInit, Input } from "@angular/core";

import { Superhero } from "../superhero";

@Component({
  selector: "app-superheroes-fecth-list",
  template: `
    <h2>Heroes from JSON File</h2>
    <p>
      Heroes as JSON:
      {{ allsuperheroes | fetch | json }}
    </p>
  `
})

export class SuperheroesFecthListComponent implements OnInit {
  @Input() allsuperheroes: Superhero[];
  constructor() {
   // this.allsuperheroes = []
  }

  ngOnInit() {
    console.log(this.allsuperheroes);
  }
}
