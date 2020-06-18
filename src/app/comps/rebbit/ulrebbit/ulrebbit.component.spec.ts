import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlrebbitComponent } from './ulrebbit.component';

describe('UlrebbitComponent', () => {
  let component: UlrebbitComponent;
  let fixture: ComponentFixture<UlrebbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlrebbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlrebbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
