import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAndViewDetailsComponent } from './capture-and-view-details.component';

describe('CaptureAndViewDetailsComponent', () => {
  let component: CaptureAndViewDetailsComponent;
  let fixture: ComponentFixture<CaptureAndViewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptureAndViewDetailsComponent]
    });
    fixture = TestBed.createComponent(CaptureAndViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
