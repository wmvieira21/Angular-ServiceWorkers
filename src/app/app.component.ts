import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PostModel } from './postNews.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-ServiceWorkers';

  news: PostModel[];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<PostModel[]>('http://jsonplaceholder.typicode.com/posts').subscribe(postNews => {
      this.news = postNews;
    })
  }
}
