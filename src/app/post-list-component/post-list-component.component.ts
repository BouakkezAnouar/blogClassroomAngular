import { PostsService } from "./../services/posts.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Post } from "../Post";
import { Subject, Subscription } from "../../../node_modules/rxjs";

@Component({
  selector: "post-list-component",
  templateUrl: "./post-list-component.component.html",
  styleUrls: ["./post-list-component.component.css"]
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;
  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
