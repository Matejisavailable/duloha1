import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book, KnihaZoznam} from './app/models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8080/api/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<KnihaZoznam[]> {
    return this.http.get<KnihaZoznam[]>(`${this.apiUrl}`);
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${bookId}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, {nazov: book.name, autor: book.author, dostupna: book.available});
  }

}
