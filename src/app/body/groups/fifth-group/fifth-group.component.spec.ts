import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthGroupComponent } from './fifth-group.component';

describe('FifthGroupComponent', () => {
  let component: FifthGroupComponent;
  let fixture: ComponentFixture<FifthGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
