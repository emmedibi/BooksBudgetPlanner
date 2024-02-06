package com.myProjects.BooksBudgetPlanner.controller;

import com.myProjects.BooksBudgetPlanner.entity.Book;
import com.myProjects.BooksBudgetPlanner.service.BookService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BookControllerTest {

    @Mock
    private BookService bookService;

    @InjectMocks
    private BookController bookController;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetBooks() {
        List<Book> books = new ArrayList<>();
        books.add(new Book("BookOne", "AuthorOne", 15, true, true));
        books.add(new Book("BookTwo", "AuthorTwo", 24, false, true));
        when(bookService.findAll()).thenReturn(books);

        List<Book> result = bookController.getBooks();

        assertEquals(2, result.size());
        // Book One
        assertEquals("BookOne", result.get(0).getTitle());
        assertEquals("AuthorOne", result.get(0).getAuthor());
        assertEquals(15, result.get(0).getPrice());
        assertTrue(result.get(0).isRead());
        assertTrue(result.get(0).isBoughtBeforeRegisterOnTheApp());
        // Book Two
        assertEquals("BookTwo", result.get(1).getTitle());
        assertEquals("AuthorTwo", result.get(1).getAuthor());
        assertEquals(24, result.get(1).getPrice());
        assertFalse(result.get(1).isRead());
        assertTrue(result.get(1).isBoughtBeforeRegisterOnTheApp());
    }

    @Test
    void testSetAsRead() {

        Long bookId = 1L;
        Book existingBook = new Book("ExBook", "ExAuthor", 10, false, true);
        existingBook.setId(bookId);

        when(bookService.findBook(bookId)).thenReturn(existingBook);

        bookController.setAsRead(bookId);

        verify(bookService, times(1)).findBook(bookId);
        verify(bookService, times(1)).save(existingBook);
        verifyNoMoreInteractions(bookService);

    }

}
