export class Borrowed{
  id?:string;
  book:string;
  user:string;


  constructor(borrowing: Borrowed) {
    this.id = borrowing.id;
    this.book = borrowing.book;
    this.user = borrowing.user;
  }
}
