import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesComponent } from './exchange-rates.component';
import { RatesService } from '../rates.service';
import { of } from 'rxjs';

class RatesServiceMock {
  getRates() {
    const resultRates: any = {
      data: {
        rates: [
          { currency: 'AFN' },
          { rate: '75,40' }
        ]
      }
    };
    return of(resultRates);
  }
}

describe('ExchangeRatesComponent', () => {
  let component: ExchangeRatesComponent;
  let fixture: ComponentFixture<ExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRatesComponent ],
      providers: [
        { provide: RatesService, useClass: RatesServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return rates', () => {
    expect(component.rates[0].currency).toBe('AFN');
  });
});
