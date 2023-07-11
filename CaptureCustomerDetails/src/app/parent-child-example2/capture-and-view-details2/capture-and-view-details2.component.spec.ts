import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAndViewDetails2Component } from './capture-and-view-details2.component';

describe('CaptureAndViewDetails2Component', () => {
  let component: CaptureAndViewDetails2Component;
  let fixture: ComponentFixture<CaptureAndViewDetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptureAndViewDetails2Component]
    });
    fixture = TestBed.createComponent(CaptureAndViewDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
