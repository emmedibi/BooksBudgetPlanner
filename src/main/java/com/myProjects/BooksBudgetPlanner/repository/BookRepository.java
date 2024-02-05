package com.myProjects.BooksBudgetPlanner.repository;

import com.myProjects.BooksBudgetPlanner.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    List<Book> findAll();

    Optional<Book> findById(Long id);
}
