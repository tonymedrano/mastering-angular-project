import { Component, OnInit } from "@angular/core";

import { Superhero } from "../superhero";
import { SuperheroService } from "../superhero.service";

@Component({
  selector: "app-superhero-dashboard",
  templateUrl: "./superhero-dashboard.component.html",
  styleUrls: ["./superhero-dashboard.component.css"]
})
export class SuperheroDashboardComponent implements OnInit {
  superheroes: Superhero[];
  allsuperheroes: Superhero[];

  constructor(private superheroService: SuperheroService) {
    this.superheroes = [];
    this.allsuperheroes = [];
  }

  ngOnInit() {
    this.getSuperHeroes();
    this.getAllSuperHeroes();
  }

  getSuperHeroes(): void {
    this.superheroService
      .getSuperheroes()
      .subscribe(sp => (this.superheroes = sp.slice(1, 5)));
  }

  getAllSuperHeroes(): void {
    this.superheroService
      .getSuperheroes()
      .subscribe(sp => this.allsuperheroes = sp);
  }
}
