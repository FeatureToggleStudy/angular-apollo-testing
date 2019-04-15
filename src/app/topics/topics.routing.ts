import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsComponent } from './topics/topics.component';
import { EagerComponent } from './lazy-loading/eager/eager.component';

const routes: Routes = [
  {
    path: 'topics',
    component: TopicsComponent,
    children: [
      {
        path: 'eager',
        component: EagerComponent,
      },
      {
        path: 'lazy',
        loadChildren: './lazy-loading/lazy.module#LazyModule'
      },
      {
        path: 'another-lazy',
        loadChildren: './lazy-loading/another-lazy/another-lazy.module#AnotherLazyModule'
      },
    ]
  },
];

export const topicsRouting: ModuleWithProviders = RouterModule.forChild(routes);
