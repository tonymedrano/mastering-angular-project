import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

//. Application
import { AppComponent } from "./app.component";
import { SuperheroesComponent } from "./superheroes/superheroes.component";
import { SuperheroDetailComponent } from "./superhero-detail/superhero-detail.component";
import { SuperheroMessagesComponent } from "./superhero-messages/superhero-messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { SuperheroDashboardComponent } from "./superhero-dashboard/superhero-dashboard.component";
import { SuperheroSearchComponent } from "./superhero-search/superhero-search.component";

//. Ads
import {
  HeroJobAdComponent,
  AdBannerComponent,
  HeroProfileComponent,
  AdDirective,
  AdService
} from "./ads";
import { FlyingSuperheroesPipe, FlyingSuperheroesImpurePipe } from './flying-superheroes.pipe';
import { FlyingSuperheroesComponent, FlyingSuperheroesImpureComponent } from './flying-superheroes/flying-superheroes.component';
import { SuperheroAsyncMessageComponent } from './superhero-async-message/superhero-async-message.component';
import { SuperherFetchJsonPipe } from './superher-fetch-json.pipe';
import { SuperheroesFecthListComponent } from './superheroes-fecth-list/superheroes-fecth-list.component';
import { SuperheroesProfileEditorComponent } from './superheroes-profile-editor/superheroes-profile-editor.component';
import { NameProfileEditorComponent } from './name-profile-editor/name-profile-editor.component';

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}
export const SUPERHERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroDetailComponent,
    SuperheroMessagesComponent,
    SuperheroDashboardComponent,
    SuperheroSearchComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    FlyingSuperheroesPipe,
    FlyingSuperheroesImpurePipe,
    FlyingSuperheroesComponent,
    FlyingSuperheroesImpureComponent,
    SuperheroAsyncMessageComponent,
    SuperherFetchJsonPipe,
    SuperheroesFecthListComponent,
    SuperheroesProfileEditorComponent,
    NameProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [
    AdService,
  { provide: 'superherodi', useValue: SUPERHERO_DI_CONFIG }
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
