import React from "react";

// import styled components
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    margin: 1%;
    position: relative;
    border-radius: 0.2rem;
    background-color: whitesmoke;
    color: rgb(153, 111, 56);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: .5rem;
        background-color:  rgba(153, 111, 56, 0.863);
        color: whitesmoke;
    }
`;

const CharacterCard = (props) => {
    return (
        <Card>
            <div>
                <h2> { props.name } </h2>
                <h4> About "{ props.name }" </h4>
                <p> <b>Height:</b> { props.height }</p>
                <p> <b>Mass:</b> { props.mass }</p>
                <p> <b>Hair Color:</b> { props.hairColor }</p>
                <p> <b>Skin Color:</b> { props.skinColor }</p>
                <p> <b>Birth Year:</b> { props.birthYear }</p>
                <p> <b>Gender:</b> { props.gender }</p>
                <p> <b>Films:</b> { props.films }</p>
                <p> <b>Starships:</b> { props.height }</p>
            </div>
        </Card>
    );
};

export default CharacterCard;