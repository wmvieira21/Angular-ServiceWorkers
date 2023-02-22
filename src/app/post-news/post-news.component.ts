import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {

  news = [{}];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(postNews => {
      console.log('postNews');
      console.log(postNews);
    })
  }
}

