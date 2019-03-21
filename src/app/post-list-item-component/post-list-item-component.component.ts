import { PostsService } from "./../services/posts.service";
import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../Post";

@Component({
  selector: "post-list-item-component",
  templateUrl: "./post-list-item-component.component.html",
  styleUrls: ["./post-list-item-component.component.css"]
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostsService) {}

  loveIt() {
    this.post.loveIts++;
    this.postService.updatePost(this.post);
  }

  DontLoveIt() {
    this.post.loveIts--;
    this.postService.updatePost(this.post);
  }

  deletePost() {
    this.postService.removePost(this.post);
  }

  ngOnInit() {}
}
