import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  @Input() name: string | undefined;

  constructor(private router:Router) {
    this.fetchKantoPokemon();
  }

  @HostListener("click") click() {
    this.goToPokemon();
  }

  ngOnInit(): void {
  }

  fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then((allpokemon) => {
       this.pokemons = allpokemon.results;
       allpokemon.results.forEach((pokemon:any, index:number) => {
       this.fetchPokemonData(pokemon, index);
     })
    })
   }

   fetchPokemonData(pokemon:any, index:number){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then((pokeData) => {
        this.pokemons[index].data = pokeData;
        //console.log(this.pokemons[index])
      })
    }

    goToPokemon() {
      console.log(this.router.navigate(["/pokemon", this.name]));
    }
}
