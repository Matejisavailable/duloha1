import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWebComponent } from './user-web.component';

describe('UserWebComponent', () => {
  let component: UserWebComponent;
  let fixture: ComponentFixture<UserWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
