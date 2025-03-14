import { DropDown } from "./panel-styles";
import './panel-styles.css'
import React, { useState, useEffect} from "react";

const Panel = ({items}) => {
  let amountOfStars = ""
// Function to check window size and update the variable
//height = 230
//width = 200
  return (
    
    <DropDown >
    
    {items && items.map((item) => (
    <div key = {item.id} >
    <p>{item.name}</p>
    <img className = "panelimage" src={item.imageUrl} alt = {`Panel Image`} />
    <p>${item.price}.00</p>
    <p>{item.amtstars}</p> 
    <p>----</p>
    </div>
    ))}
    
       </DropDown>
    );
  }

export default Panel;
