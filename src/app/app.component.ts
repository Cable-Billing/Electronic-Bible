import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from './services/read-json.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public books: any;
  public chapters: any;
  public version: FormControl = new FormControl('');

  constructor(private readJson: ReadJsonService) {}

  ngOnInit(): void {
    this.version.setValue("kjv");
    this.readJson.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  public getChapters(book: string): void {
    this.readJson.getChapters(this.version.value, book).subscribe(data => {
      this.chapters = data.chapters;
    });
  }
}