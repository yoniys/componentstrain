import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebbitComponent } from './rebbit.component';

describe('RebbitComponent', () => {
  let component: RebbitComponent;
  let fixture: ComponentFixture<RebbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
