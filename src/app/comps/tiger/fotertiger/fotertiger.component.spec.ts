import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotertigerComponent } from './fotertiger.component';

describe('FotertigerComponent', () => {
  let component: FotertigerComponent;
  let fixture: ComponentFixture<FotertigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotertigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotertigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
