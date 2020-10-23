import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component"
import { MoodListerComponent } from './components/mood-lister/mood-lister.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'mood/:id', component: MoodListerComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
