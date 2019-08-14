import { Component, OnInit } from "@angular/core";

import { Superhero } from "../superhero";
import { SuperheroService } from "../superhero.service";

@Component({
  selector: "app-superhero-dashboard",
  templateUrl: "./superhero-dashboard.component.html",
  styleUrls: ["./superhero-dashboard.component.css"]
})
export class SuperheroDashboardComponent implements OnInit {
  superheroes: Superhero[] = [];

  constructor(private superheroService: SuperheroService) {}

  ngOnInit() {
    this.getSuperHeroes();
  }

  getSuperHeroes(): void {
    this.superheroService
      .getSuperheroes()
      .subscribe(sp => (this.superheroes = sp.slice(1, 5)));
  }
}
