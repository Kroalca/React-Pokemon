import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import useSWR from "swr"
import { fetcher } from '../service/fetcher';
import { Pokemons, PokemonUrl } from '../interface/Pokemon';
import { useNavigate } from "react-router-dom";
import PokemonImage from "../resources/images/pokemon-image.png"
import '../App.css';

function Header() : JSX.Element {

    const { data, error } = useSWR<Pokemons>(`http://pokeapi.co/api/v2/pokemon/?limit=1126`, fetcher);
    let navigate = useNavigate();

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option: PokemonUrl) => option.name
    });

    const handleInputChange = (event: React.SyntheticEvent, value: string, reason: string) => {
        if (reason==="reset") {
            navigate(`/pokemon/${value}`);
        }
        console.log({value,reason});
    };


    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


    return (
        <React.Fragment>
        <header>
            <img src={PokemonImage} alt="Pokemon" onClick={() => navigate(`/1`)} />
            <div className="container py-5">
            <Autocomplete
                disablePortal
                id="search"
                options={data.results}
                getOptionLabel={(option) => option.name}
                filterOptions={filterOptions}
                onInputChange={handleInputChange}
                fullWidth={true}
                renderInput={(params) => <TextField {...params} label="Pokemon" />}/>
            </div>
        </header>
        </React.Fragment>
    );
}

export default Header;
