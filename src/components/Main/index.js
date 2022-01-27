import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { MainContainer,
    MainContent,
    MainItems,
    MainH1,
    MainP,
    MainBtn } from './Main';

const Main = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => { 
    setIsOpen(!isOpen)
}
  return (
  <MainContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContent>
          <MainItems>
              <MainH1>Greatest Restaurant Ever</MainH1>
              <MainP>Ready in 15 minutes</MainP>
              <MainBtn onClick={toggle}>Place Order</MainBtn>
          </MainItems>
      </MainContent>
  </MainContainer>
  )
};

export default Main;
