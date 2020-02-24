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
  public bookControl: FormControl = new FormControl('');
  public chapterControl: FormControl = new FormControl('');
  public versionControl: FormControl = new FormControl('');
  public chapterLoaded: boolean = false;
  public chapterData: any;

  constructor(private readJson: ReadJsonService) {}

  ngOnInit(): void {
    this.versionControl.setValue("kjv");
    this.readJson.getBooks().subscribe(data => {
      this.books = data;
    });

    this.bookControl.valueChanges.subscribe(value => {
      this.readJson.getChapters(this.versionControl.value, value).subscribe(data => {
        this.chapters = data.chapters;
        this.chapterControl.setValue("");
        this.chapterLoaded = false;
      });
    });

    this.chapterControl.valueChanges.subscribe(value => {
      if (value !== "") {
        this.chapterLoaded = true;
        this.chapterData = this.chapters[value - 1];
        console.log(this.chapterData);
      }
    });
  }
}