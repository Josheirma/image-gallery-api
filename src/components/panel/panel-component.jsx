import GalleryCard from "../../routes/category/GalleryCard/GalleryCard.jsx";
//import { DropDown } from "./panel-styles";
import React, { useState, useEffect } from "react";
import styles from "../../../src/script.module.css"

const Panel = ({ items }) => {
  let amountOfStars = "";
  // Function to check window size and update the variable
  //height = 230
  //width = 200
  return (
    <div className = {styles.OuterContainer}>
    <div className= {styles.PanelContainer} >
      {items &&
        items.map((item) => (
          <GalleryCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.name}
            price={`$${item.price}.00`}
          />
          
        ))}
    </div>
    </div>
  );
};

export default Panel;
