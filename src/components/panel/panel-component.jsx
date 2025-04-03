//import GalleryCard from "../../routes/category/GalleryCard/GalleryCard";
//import { DropDown } from "./panel-styles";
//import "./panel-styles.css";
import React, { useState, useEffect } from "react";
import styles from "../../script.module.css"

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
          // <GalleryCard
          //   key={item.id}
          //   imageUrl={item.imageUrl}
          //   title={item.name}
          //   price={`$${item.price}.00`}
          // />
          
          <div className = {styles.Text}>
          <div key={item.id}>
            {item.name}
           
           <div className = {styles.ImageContainer}>
            <img
            className = {styles.PanelImage}
              
              src={item.imageUrl}
              alt={`Panel`}
            />
           </div>
            ${item.price}.00
            <div>{item.amtstars}</div>
            <div>----</div>
          </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Panel;
