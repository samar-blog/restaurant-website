import React from 'react';
import {FeatureContainer, FeatureButton} from './Feature';

const Feature = () => {
  return ( 
   <FeatureContainer>
       <h1>Action of the Day</h1>
       <p>If you buy 2 servings of shashlik, the Fruit Dessert is free</p>
       <FeatureButton>Order Now </FeatureButton>
   </FeatureContainer>
  )
};

export default Feature;
