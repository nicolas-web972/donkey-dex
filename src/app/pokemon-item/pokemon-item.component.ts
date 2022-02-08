import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})

export class PokemonItemComponent {

  

  constructor(private apiPokemon: ApiPokemonService) {
    this.apiPokemon.fetchKantoPokemon();
  }

  // ngOnInit(): void {
  // }
}
