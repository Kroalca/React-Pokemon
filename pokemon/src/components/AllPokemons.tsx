import React from 'react';
import useSWR from "swr"
import { fetcher } from '../service/fetcher';
import { Pokemons, PokemonUrl } from '../interface/Pokemon';
import CardPokemon from './CardPokemon';
import { useParams, useNavigate } from "react-router-dom";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function AllPokemons() : JSX.Element {
    const { page } = useParams();
    let navigate = useNavigate();
    const { data, error } = useSWR<Pokemons>(`https://pokeapi.co/api/v2/pokemon?offset=${page===undefined || parseInt(page!)===1 ? 0 : (parseInt(page!) - 1) * 20}&limit=20`, fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const handleChange = (event : React.ChangeEvent<unknown> ,value : Number) => {
        navigate(`/${value}`);
    };

    return (
        <React.Fragment>
            <div className="pokemons">
                {data?.results.map((poke : PokemonUrl , index : number) => {
                    return (
                        <div className="my-5">
                            <CardPokemon key={index} url={poke.url} name={poke.name}/>
                        </div>
                    );
                })}
            </div>
            <Stack spacing={2} className="center">
                <Pagination variant="outlined" shape="rounded" count={Math.round((data.count/20)) + 1} size="large" onChange={handleChange} page={page===undefined ? 1 : parseInt(page!)}/>
            </Stack>
        </React.Fragment>
    );
} 

export default AllPokemons;