import { Injectable } from "@angular/core";
import { Post } from "../Post";
import { Subject } from "../../../node_modules/rxjs";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase
      .database()
      .ref("/posts")
      .set(this.posts);
  }

  getPosts() {
    firebase
      .database()
      .ref("/posts")
      .on("value", data => {
        this.posts = data.val() ? data.val() : [];

        //one element problem solve -- when database contain one element -> data.val() is just object not an array of abjects
        // if (!Array.isArray(this.posts)) this.posts = Object.values(this.posts);

        //solve empty element problem like this [empty , {} , {}] to be like this [{} ,{}] when deleting from firebase using UI console
        // this.posts = this.posts.filter(el => el != null);

        this.emitPosts();
        console.log(this.posts);
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(postEl => {
      if (postEl === post) return true;
    });

    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  updatePost(post: Post) {
    const postIndexToUpdate = this.posts.findIndex(postEl => {
      if (postEl === post) return true;
    });

    //existe
    if (postIndexToUpdate > 0) {
      this.posts[postIndexToUpdate] = post;
      this.savePosts();
      this.emitPosts();
    }
  }
  constructor() {
    this.getPosts();
  }
}
