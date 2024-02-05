import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private basUrl = "http://localhost:8080/books"

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.basUrl}`);
  }

  save(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, book);
  }

  setAsRead(id:number): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, id);
  }
}
