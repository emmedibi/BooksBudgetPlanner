import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBudgetDashboardComponent } from './book-budget-dashboard.component';

describe('BookBudgetDashboardComponent', () => {
  let component: BookBudgetDashboardComponent;
  let fixture: ComponentFixture<BookBudgetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookBudgetDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookBudgetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
