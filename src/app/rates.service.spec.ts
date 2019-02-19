import { TestBed, getTestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { ApolloQueryResult } from 'apollo-client/core/types';

import { RatesService, GET_RATES_QUERY } from './rates.service';
import { Rates } from './exchange-rates/exchange-rates.component';

describe('RatesService', () => {
  let injector: TestBed;
  let ratesService: RatesService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [RatesService]
    });

    injector = getTestBed();
    ratesService = injector.get(RatesService);
    controller = injector.get(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(ratesService).toBeTruthy();
  });

  it('should return rates', () => {
    const resultRates: any = {
      data: {
        rates: [
          { currency: 'AFN' },
          { rate: '75,40' }
        ]
      }
    };

    ratesService.getRates().subscribe(({ data }: ApolloQueryResult<Rates>) => {
      console.log('test rates', data);
      expect(data.rates).toEqual(resultRates.data.rates);
    });

    const req = controller.expectOne(GET_RATES_QUERY);
    req.flush(resultRates);
  });
});
