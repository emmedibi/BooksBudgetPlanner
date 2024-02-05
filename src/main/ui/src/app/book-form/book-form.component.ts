import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

 book!: Book;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private bookService: BookService) {
    this.book = new Book();
  }

  onSubmit() {
    this.bookService.save(this.book).subscribe(result => this.goToBookList());
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }
}
