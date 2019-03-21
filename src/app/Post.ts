export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: number;

  constructor(title: string, content: string) {
    this.created_at = new Date().getTime();
    this.title = title;
    this.content = content;
    this.loveIts = 0;
  }
}
