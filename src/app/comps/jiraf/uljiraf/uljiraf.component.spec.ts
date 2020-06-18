import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UljirafComponent } from './uljiraf.component';

describe('UljirafComponent', () => {
  let component: UljirafComponent;
  let fixture: ComponentFixture<UljirafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UljirafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UljirafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
