import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  isLoading = true;

  @Input() name: string | undefined;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.fetchAllPokemon();
  }

  @HostListener('click') click() {
    this.goToPokemon();
  }

  ngOnInit(): void {}

  fetchAllPokemon() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .pipe(delay(1000))
      .subscribe((allpokemon: any) => {
        this.isLoading = false;
        this.pokemons = allpokemon.results;
        allpokemon.results.forEach((pokemon: any, index: number) => {
          this.fetchPokemonData(pokemon, index);
        });
      });
  }

  fetchPokemonData(pokemon: any, index: number) {
    let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    return this.httpClient.get(url)
      .pipe(delay(1000))
      .subscribe((pokeData) => {
        this.pokemons[index].data = pokeData;
        console.log(pokeData);
      });
  }

  goToPokemon() {
    this.router.navigate(['/pokemon', this.name]);
  }
}
