import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { BookBudgetDashboardComponent } from "./book-budget-dashboard/book-budget-dashboard.component";
import { BookFormComponent } from "./book-form/book-form.component";
import { BookListComponent } from "./book-list/book-list.component";
import { DatasharingService } from "./services/datasharing.service";
import { BookService } from "./services/book.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
      AppComponent,
      BookBudgetDashboardComponent,
      BookFormComponent,
      BookListComponent
    ],
    imports: [
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserModule,
      RouterOutlet,
      RouterLink,
      RouterModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
    ],
    providers: [DatasharingService, BookService, provideAnimationsAsync('noop')],
    bootstrap: [AppComponent]
  })

  export class AppModule {}