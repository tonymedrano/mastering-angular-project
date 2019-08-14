import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { SuperheroesComponent } from "./superheroes/superheroes.component";
import { SuperheroDetailComponent } from "./superhero-detail/superhero-detail.component";
import { SuperheroMessagesComponent } from "./superhero-messages/superhero-messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { SuperheroDashboardComponent } from "./superhero-dashboard/superhero-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroDetailComponent,
    SuperheroMessagesComponent,
    SuperheroDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
