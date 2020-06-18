import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoterrebbitComponent } from './foterrebbit.component';

describe('FoterrebbitComponent', () => {
  let component: FoterrebbitComponent;
  let fixture: ComponentFixture<FoterrebbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoterrebbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoterrebbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
