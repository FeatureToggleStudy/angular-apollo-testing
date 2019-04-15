import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatSlideToggleModule
} from '@angular/material';

import { ScrollSpyDirective } from './directives/scroll-spy.directive';

import { TopicsComponent } from './topics/topics.component';
import { topicsRouting } from './topics.routing';

import { DecoratorsComponent } from './decorators/decorators.component';
import { ForScrollComponent, } from './for-scroll/for-scroll.component';
import { LoremIpsumComponent } from './for-scroll/lorem-ipsum.component';
import { CoercionComponent } from './coercion/coercion.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { EagerComponent } from './lazy-loading/eager/eager.component';
import { LazyModule } from './lazy-loading/lazy.module';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    LazyModule,
    topicsRouting
  ],
  declarations: [
    TopicsComponent,
    LazyLoadingComponent,
    EagerComponent,
    DecoratorsComponent,
    ForScrollComponent,
    LoremIpsumComponent,
    CoercionComponent,
    ScrollSpyDirective,
  ],
  exports: [
    TopicsComponent,
    DecoratorsComponent,
    ForScrollComponent,
    LoremIpsumComponent,
    CoercionComponent
  ]
})
export class TopicsModule { }
