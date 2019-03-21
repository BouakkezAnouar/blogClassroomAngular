import { PostsService } from "./services/posts.service";
import { Post } from "./Post";
import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyAhvdVRwhyKbUUibYogy5xx_I-k8fGdAOI",
      authDomain: "blog-d9c5e.firebaseapp.com",
      databaseURL: "https://blog-d9c5e.firebaseio.com",
      projectId: "blog-d9c5e",
      storageBucket: "blog-d9c5e.appspot.com",
      messagingSenderId: "949822170802"
    };
    firebase.initializeApp(config);
  }
}
