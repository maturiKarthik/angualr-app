import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarasoulComponent } from './app-carasoul.component';

describe('AppCarasoulComponent', () => {
  let component: AppCarasoulComponent;
  let fixture: ComponentFixture<AppCarasoulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCarasoulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
