import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEducationComponent } from './app-education.component';

describe('AppEducationComponent', () => {
  let component: AppEducationComponent;
  let fixture: ComponentFixture<AppEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
