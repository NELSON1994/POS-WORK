import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LISTposComponent } from './listpos.component';

describe('LISTposComponent', () => {
  let component: LISTposComponent;
  let fixture: ComponentFixture<LISTposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LISTposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LISTposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
