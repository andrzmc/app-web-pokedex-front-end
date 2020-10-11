import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './components/views/auth-views/favorites/favorites.component';
import { MainComponent } from './components/views/auth-views/main/main.component';
import { HomeComponent } from './components/views/open-views/home/home.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    },
    {
      path: 'main',
      component: MainComponent
    },
    {
      path: 'favorites',
      component: FavoritesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
