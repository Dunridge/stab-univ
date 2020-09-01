import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGroupComponent } from './second-group.component';

describe('SecondGroupComponent', () => {
  let component: SecondGroupComponent;
  let fixture: ComponentFixture<SecondGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
