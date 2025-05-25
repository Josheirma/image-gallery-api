//Complete - prettified 5/1/25
import { React, useState, useEffect, useMemo, useContext } from "react";
import { useParams } from "react-router-dom";
import ArtPieceItem from "../../components/art-piece/art-piece-item.jsx";
import Panel from "../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "../../routes/category/category-component.module.css";
import { ArtContext } from "../../context.js";
//
export default function Category() {
  //sets a variable to the object array context
  const ART = useContext(ArtContext);

  let [showPanel, setShowPanel] = useState(false);
  // 'route' is an object from React Router containing URL parameters.
  // In this case, it holds the 'category' value from the URL path like: /category/:category
  // For example, if the URL is /category/hats, then route.category === "hats"

  const route = useParams();
  //every time there is a reroute, remounting occurs  
  let imageCategoryToShow = route.category;

  
  const [products, setProducts] = useState(() => {
    const storedValue = localStorage.getItem("products");
    //intialize products with ART (default value) array of objects if the value is null, otherwise get the entire array from localstorage.  Localstorage has the value amtstars, which can be changed.
    return storedValue !== null ? JSON.parse(storedValue) : ART;
  });

  useEffect(() => {
    //local storage has been deleted, so reinitialize with art (All amtstars are 0.)
    if (!localStorage.getItem("products") && ART) {
      setProducts(ART);
    }
  }, [ART]);

  //MEMOIZE  - only if products or imageCategoryToShow changes
  let artPiecesOfCategoryArray = useMemo(() => {
    return products.filter(
      // Filter a new array (non-mutating) to include only items matching the route param.  Remounted when using react router.  Memoize works by only doing internals if oner of the two dependencies is changed.
      (element) => element.category === imageCategoryToShow
    );
  }, [products, imageCategoryToShow]);

  //created to pass to panel, below.  Just stars!
  let arrayWithStars = products.filter(
    (element) => element.amountStarsNumber !== 0
  );

  const updateStars = (id, amtStars) => {
   // Create a single-item array that holds the entire arrray of objects
   // artPiece is in scope for the entire function body
    const updatedArrayOfProducts = products.map((artPiece) => {
      if (artPiece.id !== id) return artPiece; 

      // If the amountStarsNumber is the same as amtStars, reset to 0 (like toggle)
      const isSame = artPiece.amountStarsNumber === amtStars;
      const newAmountStarsNumber = isSame ? 0 : amtStars;

      // Map numeric stars to string labels
      const starsLabelMap = {
        0: "none",
        1: "One Check",
        2: "Two Checks",
        3: "Three Checks",
        4: "Four Checks",
      };

      // Return a new object (avoid mutation)
      //creates a single valued array that has objects
     
      return {
         //artPiece is an element of the entire array and is kept.  It updates the amountStarsNumber, and starsLabelMap over top the element, too.
        ...artPiece,
        //number stars
        amountStarsNumber: newAmountStarsNumber,
        // Sets a string containing the text representation of stars
        amtstars: starsLabelMap[newAmountStarsNumber], // Update amtstars
      };
    });

    //!
    // Use state for speed (faster than localStorage get), but it resets on page reload or route change.
    setProducts(updatedArrayOfProducts);

      //Update localStorage, in case there is a reroute, and products has been reset.
      localStorage.setItem("products", JSON.stringify(updatedArrayOfProducts));
  };

  return (


    <div className={styles.ComponentGui}>
      <div className={styles.PageContainer}>
        <h1 className={styles.Banner}>Image Gallery </h1>
        <h2 className={styles.ArtworkTitle}>
          Would you like to rate these works?
        </h2>
        <div></div>

        <div className={styles.ButtonContainer}>
          <button
            className={styles.ButtonShow}
            onClick={() => {
              setShowPanel((showPanel) => !showPanel);
            }}
          >
            {/* // Show text conditionally based on variable's truthy/falsy value */}
            {showPanel ? "Hide Panel" : "Show Panel"}
          </button>
        </div>

        <div className={styles.ArtworkLink}>
          <a href="/">Home</a>
        </div>

        <div className={styles.UpperGrid}>
          {/*// Updates on every reroute; contains products that have stars (amountStarsNumber !== 0)*/}
          {showPanel && <Panel items={arrayWithStars} />}
        </div>

        <div className={styles.GridContainer}>
          <div className={styles.Grid}>
              {/*@ // Using the route's category type, display all artworks in that category (filtered at the top) */}
            {artPiecesOfCategoryArray.map((item) => (
               <ArtPieceItem
                key={item.id}
                item={item}
                updateStars={updateStars}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
