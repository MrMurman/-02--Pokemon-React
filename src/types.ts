export interface Pokemon {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
  stats: { base_stat: number }[];
}

export interface PokemonType {
  type: { name: string };
}
