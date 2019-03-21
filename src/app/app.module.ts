import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PostListComponentComponent } from "./post-list-component/post-list-component.component";
import { PostListItemComponentComponent } from "./post-list-item-component/post-list-item-component.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { MenuComponent } from "./menu/menu.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "posts", component: PostListComponentComponent },
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  { path: "new", component: NewPostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent,
    MenuComponent
  ],
  imports: [FormsModule, BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
