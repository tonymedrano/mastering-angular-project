import { InMemoryDbService } from "angular-in-memory-web-api";
import { Superhero } from "./superhero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const superheroes = [
      { id: 1, name: "One Above All" },
      { id: 2, name: "Beyonder" },
      { id: 3, name: "Galactus" },
      { id: 4, name: "Adam Warlock" },
      { id: 5, name: "Eternity" },
      { id: 6, name: "Molecule Man" },
      { id: 7, name: "Franklin Richards" },
      { id: 8, name: "Death" },
      { id: 9, name: "Dormammu" },
      { id: 10, name: "Silver Surfer" },
      { id: 11, name: "Presence" },
      { id: 12, name: "Master Order" },
      { id: 13, name: "Lord Chaos" },
      { id: 14, name: "Doctor Doom" },
      { id: 15, name: "Cyttorak" },
      { id: 16, name: "Mephisto" },
      { id: 17, name: "Amatsu-Mikaboshi" },
      { id: 18, name: "Sentry" },
      { id: 19, name: "In-Betweener" },
      { id: 20, name: "Phoenix Force" }
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
