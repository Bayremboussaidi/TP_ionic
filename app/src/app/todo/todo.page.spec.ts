import { ComponentFixture, TestBed } from '@angular/core/testing';
import { todopage } from './todo.page';

describe('TodoPage', () => {
  let component: todopage;
  let fixture: ComponentFixture<todopage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(todopage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
