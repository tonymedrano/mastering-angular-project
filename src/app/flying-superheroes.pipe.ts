import { Pipe, PipeTransform } from "@angular/core";

import { Superhero } from "./superhero";

@Pipe({ name: "flyingSuperheroes" })
export class FlyingSuperheroesPipe implements PipeTransform {
  transform(allSuperheroes: Superhero[]) {
    if (!allSuperheroes) return;
    return allSuperheroes.filter(sp => sp.canFly);
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: "flyingSuperheroesImpure",
  pure: false
})
export class FlyingSuperheroesImpurePipe extends FlyingSuperheroesPipe {}
