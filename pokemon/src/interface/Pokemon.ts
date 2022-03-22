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

export interface SlotType {
    slot: number,
    type: Type
}

export interface Type {
    name: String,
    url: String
}
