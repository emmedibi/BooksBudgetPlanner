package com.myProjects.BooksBudgetPlanner;

import com.myProjects.BooksBudgetPlanner.entity.Book;
import com.myProjects.BooksBudgetPlanner.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BooksBudgetPlannerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BooksBudgetPlannerApplication.class, args);
	}

	@Bean
	CommandLineRunner init(BookRepository bookRepository){
		return args -> {
			Book book = new Book("Divine Rivals", "Rebecca Ross", 20, true, true);
			bookRepository.save(book);
			bookRepository.findAll().forEach(System.out::println);
		};
	}
}
