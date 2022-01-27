import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Main from "./components/Main";
import Products from "./components/Products";
import {productData, DesertData} from './components/Products/data';
import Feature from "./components/Features";

function App() {
  return (
    <Router>
      <GlobalStyle />
     <Main />
     <Products  heading='Choose your favorite' data={productData }/>
     <Feature />
     <Products  heading='Our Deserts for you' data={DesertData }/>
    </Router>
  );
}

export default App;

