import React from 'react';
import Slider from '@material-ui/core/Slider';
import Marks from "./values";


export default function DiscreteSlider() {

  function handleChange(event, value){
    console.log(value);
    
  }

   return (
    
     <Slider
      onChange={handleChange}
      min={0}
      max={20000000}
        defaultValue={0}
        aria-labelledby="discrete-slider-custom"
        marks={Marks.map((ele) => ele)}
      />

  );
}