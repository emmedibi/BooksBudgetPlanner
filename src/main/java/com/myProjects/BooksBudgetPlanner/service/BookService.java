package com.myProjects.BooksBudgetPlanner.service;

import com.myProjects.BooksBudgetPlanner.entity.Book;
import com.myProjects.BooksBudgetPlanner.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public void save(Book book){
        bookRepository.save(book);
    }

    public List<Book> findAll(){
        return bookRepository.findAll();
    }

    public Book findBook(Long id) {
        return bookRepository.findById(id).get();
    }
}
