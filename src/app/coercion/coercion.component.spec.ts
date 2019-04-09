import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoercionComponent } from './coercion.component';

describe('CoercionComponent', () => {
  let component: CoercionComponent;
  let fixture: ComponentFixture<CoercionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoercionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoercionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
