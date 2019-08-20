import { InMemoryDbService } from "angular-in-memory-web-api";
import { Superhero } from "./superhero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const superheroes = [
      { id: 1, name: "One Above All", canFly: true },
      { id: 2, name: "Beyonder", canFly: false },
      { id: 3, name: "Galactus", canFly: false },
      { id: 4, name: "Adam Warlock", canFly: true },
      { id: 5, name: "Eternity", canFly: false },
      { id: 6, name: "Molecule Man", canFly: true },
      { id: 7, name: "Franklin Richards", canFly: true },
      { id: 8, name: "Death", canFly: false },
      { id: 9, name: "Dormammu", canFly: true },
      { id: 10, name: "Silver Surfer", canFly: false },
      { id: 11, name: "Presence", canFly: false },
      { id: 12, name: "Master Order", canFly: false },
      { id: 13, name: "Lord Chaos", canFly: false },
      { id: 14, name: "Doctor Doom", canFly: false },
      { id: 15, name: "Cyttorak", canFly: false },
      { id: 16, name: "Mephisto", canFly: false },
      { id: 17, name: "Amatsu-Mikaboshi", canFly: false },
      { id: 18, name: "Sentry", canFly: false },
      { id: 19, name: "In-Betweener", canFly: false },
      { id: 20, name: "Phoenix Force", canFly: false }
    ];
    return { superheroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the superheroes array is empty,
  // the method below returns the initial number (11).
  // if the superheroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(superheroes: Superhero[]): number {
    return superheroes.length > 0
      ? Math.max(...superheroes.map(superheroe => superheroe.id)) + 1
      : 11;
  }
}
