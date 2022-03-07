import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedFormComponent } from './borrowed-form.component';

describe('BorrowedFormComponent', () => {
  let component: BorrowedFormComponent;
  let fixture: ComponentFixture<BorrowedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
