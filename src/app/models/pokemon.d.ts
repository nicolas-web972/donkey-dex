export interface PokemonResponse {
  count: number;
  url: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  data?: Pokemon;
}

export interface PokemonTypeDetails {
  types: PokemonType[];
  sprites: PokemonSprites;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeDetails;
}

export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  front_default: string | null;
  front_female: string | null;
}
