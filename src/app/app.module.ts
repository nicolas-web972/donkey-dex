import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonItemComponent,
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
