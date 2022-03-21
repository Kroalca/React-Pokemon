import React from 'react';
import useSWR from "swr"
import { fetcher } from '../service/fetcher';
import { useParams } from "react-router-dom";


function ShowPokemon() : JSX.Element {
    const { id } = useParams()
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`, fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);
    
    return (
        <React.Fragment>
            <div className="showPokemon">
                <h2>{data.name}</h2>
                <img src={data.sprites.front_default} alt={data.name} />
            </div>
        </React.Fragment>
    );
} 

export default ShowPokemon;