import React from "react";
import Panel from "../panel/panel-component";
import "./art-piece-styles.css";

const ArtPiece = ({
  products,
  product1,
  showPanel,
  //panelInformation,
  //artPiecesOfCategoryArray,
  setProducts,
  //updatePanelInfo
}) => {
  
  let updatedProducts = []
  const updateStars = (id, amtStars) => {

     updatedProducts = products.map((artPieces) => {
      if (artPieces.id === id) {
        if (artPieces.amountStarsNumber === amtStars) {
          artPieces.amountStarsNumber = 0;
        } else {
          artPieces.amountStarsNumber = amtStars;
        }
      }

/*
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
      }else{
        artPieces.amtstars = "None"
      }
    
     */ 
    
    
    
      setProducts(updatedProducts);
    //updatePanelInfo(product.amountStarsNumber, product);
    localStorage.setItem(`products`, JSON.stringify(products));
    
      return ;


    });

  };

   return ( 
   
    <div>
      <>
        <div key={product1.imageUrl}>
          <div>
            <h2>{product1.name}</h2>
           
              
              <img type="Image" src={product1.imageUrl} alt = "2"   />
              <input
                checked={product1.amountStarsNumber >= 1}
                type={`checkbox`}
                onChange={() => 
                  true
                   //updateStars(product1.id, 1)
                   }
                />
              <input
                checked={product1.amountStarsNumber >= 2}
                type={`checkbox`}
                onChange={() => 
                  true
                  // updateStars(product1.id, 2)
                }
              />
              <input
                checked={product1.amountStarsNumber >= 3}
                type={`checkbox`}
                onChange={() => 
                  
                  updateStars(product1.id, 3)}
              />
              <input
                checked={product1.amountStarsNumber >= 4}
                type={`checkbox`}
                onChange={() => 
                
                updateStars(product1.id, 4)}
              />
            
          </div>
          <div>
            {showPanel && false && (
               <Panel
              product1 = {product1}
            

              />
            )
            }
          
         </div>
        </div>
      </>
    </div>
            )}
            
            


export default ArtPiece;
