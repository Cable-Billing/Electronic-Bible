import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any> {
    return this.http.get('/assets/Books.json');
  }

  public getChapters(version: string, book: string): Observable<any> {
    book = book.replace(' ', '');
    return this.http.get(`/assets/${version}/${book}.json`);
  }
}
