import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeViewComponent } from './chrome-view.component';

describe('ChromeViewComponent', () => {
  let component: ChromeViewComponent;
  let fixture: ComponentFixture<ChromeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
