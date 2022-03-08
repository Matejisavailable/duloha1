import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedWebComponent } from './borrowed-web.component';

describe('BorrowedWebComponent', () => {
  let component: BorrowedWebComponent;
  let fixture: ComponentFixture<BorrowedWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowedWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
