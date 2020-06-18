import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1rebbitComponent } from './h1rebbit.component';

describe('H1rebbitComponent', () => {
  let component: H1rebbitComponent;
  let fixture: ComponentFixture<H1rebbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1rebbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1rebbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
