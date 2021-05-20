import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTermsComponent } from './home-terms.component';

describe('HomeTermsComponent', () => {
  let component: HomeTermsComponent;
  let fixture: ComponentFixture<HomeTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
