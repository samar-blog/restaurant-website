import styled from "styled-components";
import FruitDesert from '../../images/fruitdesert.jpg';


export const FeatureContainer = styled.div` 
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${FruitDesert});
height: 100vh;
max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
padding: 0 1rem;
text-align: center;


h1 { 
    font-size:  clamp(3rem, 5vw, 5rem);
}
p { 
    text-transform: uppercase;
    font-size:  clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`;

export const FeatureButton = styled.button` 
font-size: 1.4rem;
padding: 1rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;

&:hover { 
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`