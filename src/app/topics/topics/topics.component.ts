import { Component } from '@angular/core';
import { FeatureTogglerService } from '../services/feature-toggler.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {

  constructor(
    public featureTogglerService: FeatureTogglerService
  ) { }

  toggleFeature(feature: string) {
    this.featureTogglerService.toggleFeature(feature);
  }

  getStatus(feature: string): boolean {
    return this.featureTogglerService.config[feature];
  }

}
