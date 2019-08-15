import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Superhero } from "../superhero";
import { SuperheroService } from "../superhero.service";

@Component({
  selector: "app-superhero-search",
  templateUrl: "./superhero-search.component.html",
  styleUrls: ["./superhero-search.component.css"]
})
export class SuperheroSearchComponent implements OnInit {
  superheroes$: Observable<Superhero[]>;
  private searchTerms = new Subject<string>();

  constructor(private superheroService: SuperheroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.superheroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.superheroService.searchSuperheroes(term))
    );
  }
}
