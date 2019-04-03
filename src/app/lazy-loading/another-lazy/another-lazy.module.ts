import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherLazyRoutingModule } from './another-lazy-routing.module';
import { AnotherLazyComponent } from './another-lazy.component';

@NgModule({
  declarations: [AnotherLazyComponent],
  imports: [
    CommonModule,
    AnotherLazyRoutingModule
  ]
})
export class AnotherLazyModule { }
