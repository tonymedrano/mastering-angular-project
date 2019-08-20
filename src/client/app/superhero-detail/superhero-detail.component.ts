import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Superhero } from "../superhero";
import { SuperheroService } from "../superhero.service";

@Component({
  selector: "app-superhero-detail",
  templateUrl: "./superhero-detail.component.html",
  styleUrls: ["./superhero-detail.component.css"]
})
export class SuperheroDetailComponent implements OnInit {
  superhero: Superhero;

  constructor(
    private route: ActivatedRoute,
    private superheroService: SuperheroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSuperhero();
  }

  getSuperhero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.superheroService
      .getSuperhero(id)
      .subscribe(superhero => (this.superhero = superhero));
  }

  save(): void {
    this.superheroService
      .updateSuperhero(this.superhero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
