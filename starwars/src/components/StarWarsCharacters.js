import React, { useState, useEffect } from "react";

import CharacterCard from "./CharacterCard.js";
import axios from "axios";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const StarWarsCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        axios
            .get("https://swapi.co/api/people/")
            .then( (res) => {
                console.log(res);
                setCharacters(res.data.results);
            })
    }, [] )

    return (
        <Container>
            {
                characters.map( char => {
                    return (
                        <CharacterCard 
                        key= { char.name }
                        name= { char.name }
                        height= { char.height }
                        mass= { char.mass }
                        hairColor= { char.hairColor }
                        skinColor= { char.skinColor }
                        eyeColor= { char.eyeColor }
                        birtYear= { char.birtYear }
                        gender= { char.birtYear }
                        films= { char.films.length }
                        starships= { char.starships.length}
                        />
                    )
                })
            }
        </Container>
    )
}

export default StarWarsCharacters;