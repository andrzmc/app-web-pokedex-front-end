import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';

// Components
import { HomeComponent } from './components/views/open-views/home/home.component';
import { SignComponent } from './components/templates/sign/sign.component';
import { SignInComponent } from './components/templates/sign-in/sign-in.component';
import { SignUpComponent } from './components/templates/sign-up/sign-up.component';
import { MainComponent } from './components/views/auth-views/main/main.component';
import { MenuHorizontalComponent } from './components/templates/menu-horizontal/menu-horizontal.component';
import { MenuVerticalComponent } from './components/templates/menu-vertical/menu-vertical.component';
import { PaginationPokemonComponent } from './components/templates/pagination-pokemon/pagination-pokemon.component';
import { DescriptionComponent } from './components/templates/description/description.component';
import { TypesComponent } from './components/templates/types/types.component';
import { FavoritesComponent } from './components/views/auth-views/favorites/favorites.component';
import { MyPokemonComponent } from './components/templates/my-pokemon/my-pokemon.component';
import { ActionFavoritesComponent } from './components/templates/action-favorites/action-favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    MenuHorizontalComponent,
    MenuVerticalComponent,
    PaginationPokemonComponent,
    DescriptionComponent,
    TypesComponent,
    FavoritesComponent,
    MyPokemonComponent,
    ActionFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
