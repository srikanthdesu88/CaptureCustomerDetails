import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureDetailsComponent } from './capture-details.component';

describe('CaptureDetailsComponent', () => {
  let component: CaptureDetailsComponent;
  let fixture: ComponentFixture<CaptureDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptureDetailsComponent]
    });
    fixture = TestBed.createComponent(CaptureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
