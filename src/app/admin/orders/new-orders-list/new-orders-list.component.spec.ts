import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdersListComponent } from './new-orders-list.component';

describe('NewOrdersListComponent', () => {
  let component: NewOrdersListComponent;
  let fixture: ComponentFixture<NewOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
