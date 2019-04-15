import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { TopicsComponent } from './topics/topics/topics.component';

const routes: Routes = [
  { path: 'topics', component: TopicsComponent },
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
