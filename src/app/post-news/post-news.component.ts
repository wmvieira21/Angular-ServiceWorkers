import { Component, Input } from '@angular/core';
import { PostModel } from '../postNews.model';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent {
  @Input('post') post: PostModel;
}