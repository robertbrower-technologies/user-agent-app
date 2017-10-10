import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxComponent } from './firefox.component';

describe('FirefoxComponent', () => {
  let component: FirefoxComponent;
  let fixture: ComponentFixture<FirefoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirefoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
