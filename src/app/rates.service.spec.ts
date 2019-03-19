import { TestBed, getTestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { RatesService, GET_RATES_QUERY } from './rates.service';

describe('RatesService', () => {
  let injector: TestBed;
  let ratesService: RatesService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ApolloTestingModule ],
      providers: [ RatesService ]
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

  it('should pass right variable', () => {

    ratesService.getRates().subscribe();
    const req = controller.expectOne(GET_RATES_QUERY);
    expect(req.operation.variables.currency).toEqual('USD');
  });
});
