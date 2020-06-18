import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H1jirafComponent } from './h1jiraf.component';

describe('H1jirafComponent', () => {
  let component: H1jirafComponent;
  let fixture: ComponentFixture<H1jirafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1jirafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1jirafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
