import { Component, OnInit } from "@angular/core";

import { Superhero } from "../superhero";
import { SuperheroService } from "../superhero.service";

@Component({
  selector: "app-superheroes",
  templateUrl: "./superheroes.component.html",
  styleUrls: ["./superheroes.component.css"]
})
export class SuperheroesComponent implements OnInit {
  selectedSuperhero: Superhero;
  superheroes: Superhero[];

  constructor(private superheroService: SuperheroService) {}

  ngOnInit() {
    this.getSuperheroes();
  }

  getSuperheroes(): void {
    this.superheroService
      .getSuperheroes()
      .subscribe(sp => (this.superheroes = sp));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.superheroService
      .addSuperhero({ name } as Superhero)
      .subscribe(superhero => {
        this.superheroes.push(superhero);
      });
  }

  delete(superhero: Superhero): void {
    this.superheroes = this.superheroes.filter(sp => sp !== superhero);
    this.superheroService.deleteSuperhero(superhero).subscribe();
  }
}
