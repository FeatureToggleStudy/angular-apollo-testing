import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from 'apollo-client';
import { RatesService } from '../rates.service';

export interface Rate {
  currency: string;
  rate: string;
}

export interface Rates {
  rates: Rate[];
}

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {

  rates: Rate[];
  loading = true;
  error: any;

  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    this.ratesService.getRates()
      .subscribe((result: ApolloQueryResult<Rates>) => {
        console.log('result', result)
        this.rates = result.data && result.data.rates;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
