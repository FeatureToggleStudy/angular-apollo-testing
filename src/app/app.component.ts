import { Component } from '@angular/core';
import { FeatureTogglerService } from './services/feature-toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apollo-angular';

  constructor(
    public featureTogglerService: FeatureTogglerService
  ) { }

  toggleFeature(feature) {
    this.featureTogglerService.toggleFeature(feature);
  }
}
