import { Component, Input } from "@angular/core";

import { Superhero } from "../superhero";

@Component({
  selector: "app-flying-superheroes",
  templateUrl: "./flying-superheroes.component.html",
  styles: [
    `
      h2 {
        color: #369;
      }
      h4 {
        color: #999;
      }
      .fly {
        background: #17A589;
        padding: 4px;
        color: white;
      }
    `
  ]
})
export class FlyingSuperheroesComponent {
  @Input() superheroes: Superhero[];
  @Input() allsuperheroes: Superhero[];
  title = "Flying Superheroes (pure pipe)";
}

////// Identical except for impure pipe //////
@Component({
  selector: "app-flying-superheroes-impure",
  templateUrl: "./flying-superheroes-impure.component.html",
  styles: [
    `
    h2 {
      color: #369;
    }
    h4 {
      color: #999;
    }
    .fly {
      background: #D4AC0D;
      padding: 4px;
      color: white;
    }
    `
  ]
})
export class FlyingSuperheroesImpureComponent extends FlyingSuperheroesComponent {
  title = "Flying Superheroes (impure pipe)";
}
