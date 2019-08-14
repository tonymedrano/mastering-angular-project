import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Superhero } from "./superhero";

import { SuperheroMessageService } from "./superhero-message.service";

@Injectable({
  providedIn: "root"
})
export class SuperheroService {
  private superheroesUrl = "api/superheroes"; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private superheroMessageService: SuperheroMessageService
  ) {}

  getSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.superheroesUrl).pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError<Superhero[]>("getSuperheroes", []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getSuperhero(id: number): Observable<Superhero> {
    const url = `${this.superheroesUrl}/${id}`;
    return this.http.get<Superhero>(url).pipe(
      tap(_ => this.log(`fetched superhero id=${id}`)),
      catchError(this.handleError<Superhero>(`getSuperhero id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addSuperhero(hero: Superhero): Observable<Superhero> {
    return this.http
      .post<Superhero>(this.superheroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newSuperhero: Superhero) =>
          this.log(`added hero w/ id=${newSuperhero.id}`)
        ),
        catchError(this.handleError<Superhero>("addSuperhero"))
      );
  }

  /** PUT: update the hero on the server */
  updateSuperhero(superhero: Superhero): Observable<any> {
    return this.http.put(this.superheroesUrl, superhero, this.httpOptions).pipe(
      tap(_ => this.log(`updated superhero id=${superhero.id}`)),
      catchError(this.handleError<any>("updateSuperheroes"))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteSuperhero(superhero: Superhero | number): Observable<Superhero> {
    console.log(superhero);
    const id = typeof superhero === "number" ? superhero : superhero.id;
    const url = `${this.superheroesUrl}/${id}`;

    return this.http.delete<Superhero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Superhero>("deleteSuperhero"))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.superheroMessageService.add(`SuperheroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
