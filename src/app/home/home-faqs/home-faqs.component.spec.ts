import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFaqsComponent } from './home-faqs.component';

describe('HomeFaqsComponent', () => {
  let component: HomeFaqsComponent;
  let fixture: ComponentFixture<HomeFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
