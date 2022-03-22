import React from 'react';
import useSWR from "swr"
import { fetcher } from '../service/fetcher';
import { PokemonUrl } from '../interface/Pokemon';
import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function CardPokemon(props : PokemonUrl) : JSX.Element {
    const { data, error } = useSWR(props.url, fetcher);
    let navigate = useNavigate();

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const handleClickPokemon = () => {
        navigate(`/pokemon/${data.id}`);
    };
    
    return (
        <React.Fragment>
            <Card sx={{ maxWidth: 345 }} onClick={handleClickPokemon}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={data.sprites.front_default}
                    alt={props.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='PokemonName'>
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptas!
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    );
} 

export default CardPokemon;