import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  constructor() {
    this.fetchKantoPokemon();
    this.fetchPokemonData
  }

  ngOnInit(): void {
  }

  fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then((allpokemon) => {
       console.log(allpokemon);
       this.pokemons = allpokemon.results;
       console.log(this.pokemons);
       allpokemon.results.forEach((pokemon:any) => {
       this.fetchPokemonData(pokemon);
     })
    })
   }

   fetchPokemonData(pokemon:any){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then((pokeData) => {
      // console.log(pokeData)
      // this.pokemons = pokeData;
      })
    }

}
