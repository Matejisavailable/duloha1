export class Book{
  id?:string;
  name:string;
  author:string;
  available:string;


  constructor(book: Book) {
    this.id = book.id;
    this.name = book.name;
    this.author = book.author;
    this.available = book.available;
  }
}
export class KnihaZoznam{
  id?:string;
  name:string;
  author:string;
  available:string;


constructor(book: KnihaZoznam) {
  this.id = book.id;
  this.name = book.name;
  this.author = book.author;
  this.available = book.available;
  }
}
