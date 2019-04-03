import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './lazy-loading/eager/eager.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: './lazy-loading/lazy.module#LazyModule' },
  { path: 'another-lazy', loadChildren: './lazy-loading/another-lazy/another-lazy.module#AnotherLazyModule' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
