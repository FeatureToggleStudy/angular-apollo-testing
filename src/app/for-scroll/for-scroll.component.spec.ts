import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForScrollComponent } from './for-scroll.component';

describe('ForScrollComponent', () => {
  let component: ForScrollComponent;
  let fixture: ComponentFixture<ForScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
