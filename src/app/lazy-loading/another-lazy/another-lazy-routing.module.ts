import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherLazyComponent } from './another-lazy.component';

const routes: Routes = [
  {
    path: '',
    component: AnotherLazyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherLazyRoutingModule { }

