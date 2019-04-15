import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponent }   from './lazy/lazy.component';
import { routing } from './lazy.routing';

@NgModule({
  declarations: [ LazyComponent ],
  imports: [
    CommonModule,
    routing
  ]
})
export class LazyModule { }
