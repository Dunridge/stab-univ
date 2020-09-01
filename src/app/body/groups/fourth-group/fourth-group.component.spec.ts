import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthGroupComponent } from './fourth-group.component';

describe('FourthGroupComponent', () => {
  let component: FourthGroupComponent;
  let fixture: ComponentFixture<FourthGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
