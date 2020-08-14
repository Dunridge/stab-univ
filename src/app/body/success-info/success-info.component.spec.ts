import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessInfoComponent } from './success-info.component';

describe('SuccessInfoComponent', () => {
  let component: SuccessInfoComponent;
  let fixture: ComponentFixture<SuccessInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
