import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JirafComponent } from './jiraf.component';

describe('JirafComponent', () => {
  let component: JirafComponent;
  let fixture: ComponentFixture<JirafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JirafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JirafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
