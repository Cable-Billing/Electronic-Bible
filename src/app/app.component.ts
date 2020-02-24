import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from './services/read-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public books: any;

  constructor(private readJson: ReadJsonService) {}

  ngOnInit(): void {
    this.readJson.getBooks().subscribe(data => {
      this.books = data;
    });
  }
}