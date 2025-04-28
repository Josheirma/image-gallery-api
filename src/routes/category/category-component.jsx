// if arraywithstars was a usestate variable could keep track of all products with star
// worked on max width for site: 4000k, works besides checkboxes, and centering.  Broke other things while doing this, shouldn't take very long to fix.  look at width and height functionality and decide if it is still needed.
////////
import { React, useState, useEffect, useMemo, useContext} from "react";
import { useParams } from "react-router-dom";
//import { ART } from "../../assets/ART_DATA";
import ArtPieceItem from "../../components/art-piece/art-piece-item.jsx";
import Panel from "../../components/panel/panel-component.jsx";
import styles from "../../routes/category/category-component.module.css"
import {UserContext} from "../../context.js"

export default function Category() {
  

  const ART = useContext(UserContext);
  console.log("art")
  let [showPanel, setShowPanel] = useState(false);
  const route = useParams();
  let imageCategoryToShow = route.category;
  
const [products, setProducts] = useState(() => {
    const storedValue = localStorage.getItem('products');
    return storedValue !== null ? JSON.parse(storedValue) : ART;
  })

    let artPiecesOfCategoryArray = []
  //MEMOIZE  - only if products or imagecate...
  console.log("apc: ", products)
  artPiecesOfCategoryArray = useMemo( () => {
    return products.filter((element) => element.category === imageCategoryToShow
    );
  
  } , [products, imageCategoryToShow])




 
 console.log("product: ", products)
  let arrayWithStars  = products.filter(
    (element) => element.amountStarsNumber !==  0
  );

  console.log("aws: ", arrayWithStars)
 
  console.log("array with starts:", arrayWithStars)

  //Old version, mutates...
  // const updateStars = (id, amtStars) => {
  //   let updatedarrayOfProducts = products.map((artPieces) => {
  //     if (artPieces.id === id) {
  //       if (artPieces.amountStarsNumber === amtStars) {
  //         artPieces.amountStarsNumber = 0;
  //         artPieces.amtstars = "none"
  //       } else {
  //         artPieces.amountStarsNumber = amtStars;
  //        if(amtStars === 1){
          
  //           artPieces.amtstars = "One Check"
  //         }
  //         if(amtStars === 2){
  //           artPieces.amtstars = "Two Checks"
  //         }
  //         if(amtStars === 3){
  //           artPieces.amtstars = "Three Checks"
  //         }
  //         if(amtStars === 4){
  //           artPieces.amtstars = "Four Checks"
  //         }
  //       }
      
  //     }
  //     return(artPieces)
  //   });
  //   setProducts(updatedarrayOfProducts);
   
  //     localStorage.setItem(`products`, JSON.stringify(updatedarrayOfProducts));
  // };

  const updateStars = (id, amtStars) => {
    // Create a new array with the updated products
    const updatedArrayOfProducts = products.map((artPiece) => {
      if (artPiece.id !== id) return artPiece; // Return unchanged item if not the target
  
      // If the amountStarsNumber is the same as amtStars, reset to 0 (like toggle)
      const isSame = artPiece.amountStarsNumber === amtStars;
      const newAmountStarsNumber = isSame ? 0 : amtStars;
  
      // Map numeric stars to string labels
      const starsLabelMap = {
        0: "none",
        1: "One Check",
        2: "Two Checks",
        3: "Three Checks",
        4: "Four Checks"
      };
  
      // Return a new object (avoid mutation)
      return {
        ...artPiece,
        amountStarsNumber: newAmountStarsNumber,
        amtstars: starsLabelMap[newAmountStarsNumber] // Update amtstars
      };
    });
  
    console.log("UAP: ", updatedArrayOfProducts)
    console.log("prodA: ", products)
    // Update state with the new array
    setProducts(updatedArrayOfProducts);
  
    console.log("UAP: ", updatedArrayOfProducts)
    console.log("prodA: ", products)
    // Optionally update localStorage
    localStorage.setItem("products", JSON.stringify(updatedArrayOfProducts));
  };




  console.log("art2: ", artPiecesOfCategoryArray)
  return (
     <div className = {styles.ComponentGui}>
     <div className = {styles.PageContainer}>
    <h1 className = {styles.Banner}>Image Gallery </h1>
     <h2 className = {styles.ArtworkTitle} >Would you like to rate these works?</h2>
      <div></div>
      
      
      <div className = {styles.ButtonContainer} >
        <button className = {styles.ButtonShow}
          onClick={() => {
            setShowPanel((showPanel) => !showPanel);
          }}
          
          >



            
            {showPanel ? "Hide Panel" : "Show Panel"}
        </button>
      </div>


          
      <div className = {styles.ArtworkLink}>
      <a href="/">Home</a>
      </div>

      
      <div className = {styles.UpperGrid}>
        {showPanel && <Panel items = {arrayWithStars}/>}
      </div>


       <div className = {styles.GridContainer}> 
      <div className = {styles.Grid} >
      
      {artPiecesOfCategoryArray.map((item, index) => (
          
          //<ArtPieceItem onWidthChanged = {handleMessage} key = {index} item = {item} updateStars = {updateStars}/>
          <ArtPieceItem  key = {index} item = {item} updateStars = {updateStars}/>
          ))
      }
      </div>
      </div>
       

      
    </div>
 
 </div>

)
}
 