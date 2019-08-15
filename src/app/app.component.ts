import { Component, OnInit } from "@angular/core";

import { AdService } from "./ads/ad.service";
import { AdItem } from "./ads/ad-item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Marvel Superheroes League NG";
  ads: AdItem[];

  constructor(private adService: AdService){
    
  }

  //. ::::: Checking lifecycle ::::: .\\

  //. Called before ngOnInit() and whenever one or more data-bound input properties change.
  ngOnChanges() {
    this.log("ngOnChanges", 1);
  }

  //. Called once, after the first ngOnChanges().
  ngOnInit() {
    this.ads = this.adService.getAds();
    this.log("ngOnInit", 2);
  }

  //. Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck() {
    this.log("ngDoCheck", 3);
  }

  //. Called once after the first ngDoCheck().
  ngAfterContentInit() {
    this.log("ngAfterContentInit", 4);
  }

  //. Called after the ngAfterContentInit() and every subsequent ngDoCheck().
  ngAfterContentChecked() {
    this.log("ngAfterContentChecked", 5);
  }

  //. Called once after the first ngAfterContentChecked().
  ngAfterViewInit() {
    this.log("ngAfterViewInit", 6);
  }

  //. Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
  ngAfterViewChecked() {
    this.log("ngAfterViewChecked", 7);
  }

  //. Called just before Angular destroys the directive/component.
  ngOnDestroy() {
    this.log("ngOnDestroy", 8);
  }

  //. Log the angular lyfecycle.
  private log(lifecycle: string, order: number) {
    console.log(
      `%c ${order} - ${lifecycle}`,
      "background: #222; color: #bada55; padding: 8px; font-size: 16px;"
    );
  }
}
