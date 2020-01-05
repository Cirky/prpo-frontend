import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { NakupovalniSeznam } from "../razredi/nakupovalni-seznam"
import { Artikel } from "../razredi/artikel"

@Injectable({
  providedIn: 'root'
})
export class SeznamiService {
  private headers = new HttpHeaders({"Content-Type": "application/json"});
  private url = "http://localhost:8080/v1/seznami";


  getSeznami(): Observable<NakupovalniSeznam[]> {
    return this.http.get<NakupovalniSeznam[]>(this.url).pipe(catchError(this.handleError));
  }
  getSeznam(id: number): Observable<NakupovalniSeznam> {
    const url = `${this.url}/${id}`;
    return this.http.get<NakupovalniSeznam[]>(url).pipe(catchError(this.handleError));
  }



  public dodajArtikel(seznamId: number, artikel: Artikel): Observable<Artikel> {
    const url = `${this.url}/${seznamId}/artikli`;
    return this.http.post<Artikel>(url, JSON).pipe(catchError(this.handleError));

  }
  public delete(id: number): Observable<number> {
    const url = `${this.url}/${id}`;
    return this.http.delete<number>(url, {headers: this.headers}).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error("Prišlo je do napake", error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient) { }
}
