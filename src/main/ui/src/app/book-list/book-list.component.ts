import { Component } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../services/book.service';
import { DatasharingService } from '../services/datasharing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books!: Book[];
  book!: Book;

  constructor(
    private route: ActivatedRoute,
      private bookService: BookService,
        private dataSharingService: DatasharingService,
          private router: Router){
  }

  setAsRead = (rowIndex: number) => {
    console.log(rowIndex);
    this.bookService.setAsRead(rowIndex).subscribe(result => this.goToBookList());
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
      console.log("Log: DATA value from book-list component " + data);
      console.log(data);
      console.log("Log: books value from book-list component " + this.books[0].price);
      console.log("Log: books value from book-list component " + this.books[0].read);
      this.dataSharingService.setData(this.books);
      console.log("Log: dataSharingService")
    });
  }

}
