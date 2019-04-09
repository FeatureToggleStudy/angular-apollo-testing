import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureTogglerService {

  config = {
    coercion: false,
    decorators: false,
    exchangeRates: false,
    forScroll: false,
    lazyLoading: false,
  }

  constructor() { }

  toggleFeature(feature) {
    if ( feature in this.config){
      this.config[feature] = !this.config[feature]
    }
  }

}
