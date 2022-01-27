import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";
import {  FaReadme} from 'react-icons/fa';

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 500;
font-family: sans-serif;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
font-size: 2.3rem;
text-transform: uppercase;
align-items: center;
text-decoration: none;
cursor: pointer;
font-weight: bold;
@media screen and (max-width:400px) { 
  position: absolute;
  top: 10px;
  left: 25px;
}
`;

export const NavIcon = styled.div`
display: block;
top: 0;
right: 0;
position: absolute;
cursor: pointer;
color: #fff;
 p { 
   font-weight: bold;
   transform: translate(-125%,100%);
 }
`;

export const Bars = styled(FaReadme)`
font-size: 2rem;
transform: translate();
`;
