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

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    topicsRouting
  ],
  declarations: [
    TopicsComponent,
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
