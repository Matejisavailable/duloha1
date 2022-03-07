import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedListComponent } from './borrowed-list.component';

describe('BorrowedListComponent', () => {
  let component: BorrowedListComponent;
  let fixture: ComponentFixture<BorrowedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
