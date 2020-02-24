import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('/assets/Books.json');
  }
}
