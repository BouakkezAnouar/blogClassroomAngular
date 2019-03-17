import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../Post";

@Component({
  selector: "post-list-component",
  templateUrl: "./post-list-component.component.html",
  styleUrls: ["./post-list-component.component.css"]
})
export class PostListComponentComponent implements OnInit {
  @Input() posts: Post[];
  constructor() {}

  ngOnInit() {}
}
