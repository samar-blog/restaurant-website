import React from 'react';
import { Bars, Nav, NavIcon, NavLink,Charxpalak } from './Navbar';

const Navbar = ({toggle}) => {
  return (
  <>
   <Nav> 
       <NavLink to='/Charxpalak/restaurant'>Charxpalak</NavLink>
       <NavIcon onClick={toggle}> 
           <p>Menu</p>
           <Bars />
       </NavIcon>
   </Nav>
  </>
  )
};

export default Navbar;



