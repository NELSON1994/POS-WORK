import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSSalesComponent } from './possales.component';

describe('POSSalesComponent', () => {
  let component: POSSalesComponent;
  let fixture: ComponentFixture<POSSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
