import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxViewComponent } from './firefox-view.component';

describe('FirefoxViewComponent', () => {
  let component: FirefoxViewComponent;
  let fixture: ComponentFixture<FirefoxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirefoxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
