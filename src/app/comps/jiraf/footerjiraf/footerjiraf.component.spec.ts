import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterjirafComponent } from './footerjiraf.component';

describe('FooterjirafComponent', () => {
  let component: FooterjirafComponent;
  let fixture: ComponentFixture<FooterjirafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterjirafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterjirafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
