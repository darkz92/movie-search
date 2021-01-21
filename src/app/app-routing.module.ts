import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieSearchPageComponent} from './movie-search-page/movie-search-page.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/movie-search', pathMatch: 'full' },
  { path: 'movie-search', component: MovieSearchPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
