import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherLazyComponent } from './another-lazy.component';

describe('AnotherLazyComponent', () => {
  let component: AnotherLazyComponent;
  let fixture: ComponentFixture<AnotherLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
