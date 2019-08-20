import { Pipe, PipeTransform } from "@angular/core";

import { Superhero } from "./superhero";

@Pipe({
  name: "fetch",
  pure: false
})
export class SuperherFetchJsonPipe implements PipeTransform {
  private cachedData: Superhero[] = [];
  transform(superheroes: any[]): any {
    return (this.cachedData = superheroes);
  }
}
