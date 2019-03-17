import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../Post";

@Component({
  selector: "post-list-item-component",
  templateUrl: "./post-list-item-component.component.html",
  styleUrls: ["./post-list-item-component.component.css"]
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  loveIt() {
    this.post.loveIts++;
    console.log(this.post.loveIts);
  }

  DontLoveIt() {
    this.post.loveIts--;
    console.log(this.post.loveIts);
  }

  ngOnInit() {}
}
