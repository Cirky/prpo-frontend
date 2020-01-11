import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { NakupovalniSeznam } from "../razredi/nakupovalni-seznam";
import { Artikel } from "../razredi/artikel";
import { DodajanjeArtiklaDTO } from "../razredi/dodajanje-artikla-dto";
import { NakupovalniSeznamIdDto } from "../razredi/nakupovalni-seznam-id-dto";

@Injectable({
  providedIn: 'root'
})
export class SeznamiService {
  private headers = new HttpHeaders({"Content-Type": "application/json"});
  private url = "http://localhost:8080/v1";


  getSeznami(): Observable<NakupovalniSeznam[]> {
    const url = `${this.url}/nakupovalni_seznami`;
    return this.http.get<NakupovalniSeznam[]>(url).pipe(catchError(this.handleError));
  }
  getSeznam(id: number): Observable<NakupovalniSeznam> {
    const url = `${this.url}/nakupovalni_seznami/${id}`;
    return this.http.get<NakupovalniSeznam[]>(url).pipe(catchError(this.handleError));
  }
  public getCena(seznamId: NakupovalniSeznamIdDto): Observable<Number> {
    const url = `${this.url}/nakupovalni_seznami/cena/${seznamId.seznamId}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }


  public dodajArtikel(artikel: DodajanjeArtiklaDTO): Observable<Artikel> {
    const url = `${this.url}/nakupovalni_seznami/dodajArtikle`;
    return this.http.put<Artikel>(url, artikel).pipe(catchError(this.handleError));
  }
  public delete(id: number): Observable<number> {
    const url = `${this.url}/nakupovalni_seznami/${id}`;
    return this.http.delete<number>(url, {headers: this.headers}).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error("Prišlo je do napake", error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient) { }
}
