import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBudgetDashboardComponent } from './book-budget-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('BookBudgetDashboardComponent', () => {
  let component: BookBudgetDashboardComponent;
  let fixture: ComponentFixture<BookBudgetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      declarations: [BookBudgetDashboardComponent]
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
