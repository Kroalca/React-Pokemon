export interface PokemonUrl {
    name: string;
    url: string;
}

export interface Pokemons {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonUrl[];
}
