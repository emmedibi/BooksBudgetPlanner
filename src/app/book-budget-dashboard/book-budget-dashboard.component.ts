import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../services/book.service';
import { DatasharingService } from '../services/datasharing.service';

@Component({
  selector: 'app-book-budget-dashboard',
  templateUrl: './book-budget-dashboard.component.html',
  styleUrl: './book-budget-dashboard.component.css'
})
export class BookBudgetDashboardComponent{

  books!: Book[];
  budget: number = 0;
  moneySpend: number = 0;

  constructor(private dataSharingService: DatasharingService){
  }

  ngOnInit(): void {
    this.dataSharingService.getData().subscribe(data => {
      this.books = data;
      this.budget = 0;
      this.moneySpend = 0;
      console.log("Log: get dataSharingService");
      console.log("Log: book-budget-dashboard Title of the book " + this.books[0].title);
      for (let i = 0; i < this.books.length; i++) {
        console.log("Log book-budget-dashboard component: for loop");
        this.moneySpend += this.books[i].price;
        // If the book is read, its price goes to the budget value.
        if(this.books[i].read==true){
          this.budget += this.books[i].price;
        }else if(this.books[i].read == false && this.books[i].boughtBeforeRegisterOnTheApp == false){
          this.budget -= this.books[i].price;
        }
      }
    });
    
  }

}
