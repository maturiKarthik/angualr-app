import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLinfranceComponent } from './app-linfrance.component';

describe('AppLinfranceComponent', () => {
  let component: AppLinfranceComponent;
  let fixture: ComponentFixture<AppLinfranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLinfranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLinfranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
