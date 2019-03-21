import { PostsService } from "./../services/posts.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "../../../node_modules/@angular/forms";
import { Post } from "../Post";
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let titre = form.value["titre"];
    let commentaire = form.value["commentaire"];
    this.createNewPost(titre, commentaire);
  }

  createNewPost(titre, commentaire) {
    this.postService.createNewPost(new Post(titre, commentaire));
    this.router.navigate(["/posts"]);
  }
}
