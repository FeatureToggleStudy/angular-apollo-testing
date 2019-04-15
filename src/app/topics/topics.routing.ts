import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path: 'topics', component: TopicsComponent }
];

export const topicsRouting: ModuleWithProviders = RouterModule.forChild(routes);
