import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsArchitectureComponent } from './os-architecture.component';

describe('OsArchitectureComponent', () => {
  let component: OsArchitectureComponent;
  let fixture: ComponentFixture<OsArchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsArchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
