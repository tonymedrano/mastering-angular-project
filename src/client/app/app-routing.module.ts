import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SuperheroesComponent } from "./superheroes/superheroes.component";
import { SuperheroDashboardComponent } from "./superhero-dashboard/superhero-dashboard.component";
import { SuperheroDetailComponent } from "./superhero-detail/superhero-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "superheroes", component: SuperheroesComponent },
  { path: "dashboard", component: SuperheroDashboardComponent },
  { path: 'detail/:id', component: SuperheroDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
