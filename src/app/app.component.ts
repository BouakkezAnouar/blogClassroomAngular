import { Component } from "@angular/core";
import { Post } from "./Post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts: Post[] = [
    new Post(
      "Mon premier post",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus necessitatibus voluptate debitis alias quia. Unde sed eaque nisi asperiores? Eveniet, numquam ullam molestias obcaecati iste excepturi delectus eos at."
    ),
    new Post(
      "Mon deuxième",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus necessitatibus voluptate debitis alias quia. Unde sed eaque nisi asperiores? Eveniet, numquam ullam molestias obcaecati iste excepturi delectus eos at."
    ),
    new Post(
      "Encore un post",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus necessitatibus voluptate debitis alias quia. Unde sed eaque nisi asperiores? Eveniet, numquam ullam molestias obcaecati iste excepturi delectus eos at."
    )
  ];
}
