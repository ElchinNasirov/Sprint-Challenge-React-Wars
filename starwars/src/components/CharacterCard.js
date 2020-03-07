import React from "react";

// import styled components
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    margin: 1%;
    position: relative;
    border-radius: 0.2rem;
    background-color: whitesmoke;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: .5rem;
        background-color:  rgba(153, 111, 56, 0.863);
    }
`;

const CharacterCard = (props) => {
    return (
        <Card>
            <div>
                <h2> { props.name } </h2>
                <h4> About "{ props.name }" </h4>
                <p> <em>Height:</em> { props.height }</p>
                <p> <em>Mass:</em> { props.mass }</p>
                <p> <em>Hair Color:</em> { props.hairColor }</p>
                <p> <em>Skin Color:</em> { props.skinColor }</p>
                <p> <em>Birth Year:</em> { props.birthYear }</p>
                <p> <em>Gender:</em> { props.gender }</p>
                <p> <em>Films:</em> { props.films }</p>
                <p> <em>Starships:</em> { props.starships }</p>
            </div>
        </Card>
    );
};

export default CharacterCard;