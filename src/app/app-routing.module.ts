import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './lazy-loading/eager/eager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: './lazy-loading/lazy.module#LazyModule' },
  { path: 'another-lazy', loadChildren: './lazy-loading/another-lazy/another-lazy.module#AnotherLazyModule' },
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
