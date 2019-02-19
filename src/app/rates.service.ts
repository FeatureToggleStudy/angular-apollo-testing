import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export const GET_RATES_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(public apollo: Apollo) { }

  getRates() {
    return this.apollo
      .watchQuery({
        query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
      }).valueChanges;
  }

}
