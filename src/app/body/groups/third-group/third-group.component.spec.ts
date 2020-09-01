import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGroupComponent } from './third-group.component';

describe('ThirdGroupComponent', () => {
  let component: ThirdGroupComponent;
  let fixture: ComponentFixture<ThirdGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
