import React from 'react';
import useSWR from "swr"
import { fetcher } from '../service/fetcher';
import { useParams } from "react-router-dom";
import { SlotType} from '../interface/Pokemon';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function ShowPokemon() : JSX.Element {
    const { id } = useParams()
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`, fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    
    return (
        <React.Fragment>
            <div className="container py-5">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="card-img" src={data.sprites.front_default} alt={data.name} />
                            <div className="d-flex justify-content-center">
                                <Stack direction="row" spacing={1} className="p-3">
                                    {data.types.map((element : SlotType,index : number) => {
                                        return <Chip className='text-capitalize' key={index} label={element.type.name} variant="outlined" />
                                    })}
                                </Stack>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-center text-capitalize">{data.name}</h4>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p><strong>Peso: </strong>{data.weight} Kg</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <p><strong>Altura: </strong>{data.height} M</p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quia minima nam magnam vero reprehenderit ab enim possimus libero deserunt explicabo, quos quo ex laudantium ut sequi aspernatur quod esse itaque. Iste quae velit, maiores ad qui possimus perferendis totam assumenda voluptatibus perspiciatis aperiam aliquid culpa dolores consequatur quia aspernatur sequi! Modi ullam mollitia porro eligendi molestiae inventore est. Consectetur officia porro recusandae, dicta placeat, repellendus, ullam enim rerum ut quasi explicabo aliquam neque incidunt sapiente. Impedit temporibus dignissimos eius id reprehenderit porro fuga ea iusto architecto beatae vero accusantium ducimus nihil delectus nulla, praesentium quisquam nemo mollitia nisi. Corporis.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil facere magni enim, doloribus, voluptatibus amet quibusdam ut consequuntur ullam nisi culpa placeat sed nostrum?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores est delectus officia molestiae expedita, beatae animi repellendus ipsum quaerat explicabo dolore repudiandae harum ab laboriosam aliquid perspiciatis non earum aut omnis vitae inventore! Debitis culpa quam non, a minima quibusdam illum error eaque suscipit autem sapiente esse cumque. Minima?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
} 

export default ShowPokemon;