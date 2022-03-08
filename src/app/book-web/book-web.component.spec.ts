import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWebComponent } from './book-web.component';

describe('BookWebComponent', () => {
  let component: BookWebComponent;
  let fixture: ComponentFixture<BookWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
