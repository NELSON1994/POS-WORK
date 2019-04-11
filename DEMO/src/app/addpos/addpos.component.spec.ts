import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDposComponent } from './addpos.component';

describe('ADDposComponent', () => {
  let component: ADDposComponent;
  let fixture: ComponentFixture<ADDposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
