import React, { useState, useCallback } from 'react';
import Panel from "../panel/panel-component";
import "./art-piece-styles.css";



   


// const ArtPiece = ({
//   products,
//   category,
//   showPanel,
//   setPanelInformation,
//   setProducts,
// }) => {

  // Child component wrapped with React.memo to prevent unnecessary re-renders
const ArtPiece = (({  
  products,
  category,
  showPanel,
  setPanelInformation,
  setProducts, }) => {
  console.log("Child component rendered");

  

  
  

  //SWITCH PRODUCTS TO ARRAYOFPRODUCTS1,  FILTER IN HERE, ONLY ONCE
  //let updatedarrayOfProducts = []
  const updateStars = (id, amtStars) => {

    let updatedarrayOfProducts = products.map((artPieces) => {
      if (artPieces.id === id) {
        if (artPieces.amountStarsNumber === amtStars) {
          artPieces.amountStarsNumber = 0;
          artPieces.amtstars = ""
        } else {
          artPieces.amountStarsNumber = amtStars;
          if(amtStars === 1){
            artPieces.amtstars = "One Check"
          }
          if(amtStars === 2){
            artPieces.amtstars = "Two Check"
          }
          if(amtStars === 3){
            artPieces.amtstars = "Three Check"
          }
          if(amtStars === 4){
            artPieces.amtstars = "Four Check"
          }
        }
      
      }
      return(artPieces)
    });
    setProducts(supdatedarrayOfProducts);
    setPanelInformation(updatedarrayOfProducts);
      //updatePanelInfo(arrayOfProducts.amountStarsNumber, updatedarrayOfProducts);
      //localStorage.setItem(`panel`, JSON.stringify(updatedarrayOfProducts));
    
      


    

    return true;
  };

    let arrayOfProducts1 = products.filter(
    (element) => element.category === category
  )

  console.log("get category from all products: ", arrayOfProducts1)
  let arrayOfProducts2 = products.filter(
    (element) => element.category === category
  )
  

  let arrayOfProducts = []
  let arrayOfProducts3 = []
   return ( 
   
    
    <div>
     
    <div>{arrayOfProducts1.map((arrayOfProducts) => 
    (
      
   

        <div key={arrayOfProducts.imageUrl}>
          <div>
            <h2>{arrayOfProducts.name}</h2>
           
              
              <img type="Image" src={arrayOfProducts.imageUrl} alt = "Image of Art"   />
              <input
                checked={arrayOfProducts.amountStarsNumber >= 1}
                type={`checkbox`}
                onChange={() => 
                  updateStars(arrayOfProducts.id, 1)
                   }
                />
              <input
                checked={arrayOfProducts.amountStarsNumber >= 2}
                type={`checkbox`}
                onChange={() => 
                  updateStars(arrayOfProducts.id, 2)
                }
              />
              <input
                checked={arrayOfProducts.amountStarsNumber >= 3}
                type={`checkbox`}
                onChange={() => 
                  
                  updateStars(arrayOfProducts.id, 3)}
              />
              <input
                checked={arrayOfProducts.amountStarsNumber >= 4}
                type={`checkbox`}
                onChange={() => 
                
                updateStars(arrayOfProducts.id, 4)}
              />
            
          </div>
          
            
          
             </div>
       
      
     )
     
     )
     

    

}


     </div>

    

     <div>

  
  
     

{arrayOfProducts2 && showPanel && arrayOfProducts2.map((arrayOfProducts3, index) => (
  <Panel key = {index}  arrayOfProducts3 = {arrayOfProducts3}  />
   ))}
            

     </div>

     
          
     </div> 
   )
   });
            
            


export default ArtPiece;
