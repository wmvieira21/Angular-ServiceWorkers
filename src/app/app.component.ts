import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-ServiceWorkers';

  news : [{title: string, body: string}];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<[{}]>('http://jsonplaceholder.typicode.com/posts').subscribe((postNews: [{}]) => {
      this.news = postNews;
    })
  }
}
