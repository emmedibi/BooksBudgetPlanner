package com.myProjects.BooksBudgetPlanner.controller;

import com.myProjects.BooksBudgetPlanner.entity.Book;
import com.myProjects.BooksBudgetPlanner.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    BookService bookService;

    @GetMapping("/books")
    public List<Book> getBooks() {
        log.info("UserController: getUsers()");
        return bookService.findAll();
    }

    @PostMapping("/books")
    public void addBook(@RequestBody Book book){
        log.info("BookController: addBook(book)");
        bookService.save(book);
    }

    @PutMapping("/books/{id}")
    public void setAsRead(@RequestBody Long bookId){
        log.info("BookController: setAsRead(book)");
        Book bookUpdated = bookService.findBook(bookId);
        bookUpdated.setRead(true);
        bookService.save(bookUpdated);
    }
}
