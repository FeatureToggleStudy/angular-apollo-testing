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
    if (feature in this.config) {
      Object.keys(this.config).map(key => {
        key === feature
          ? this.config[key] = true
          : this.config[key] = false
      })
    }
  }

}
