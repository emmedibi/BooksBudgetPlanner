import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: 'addbook', component: BookFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
