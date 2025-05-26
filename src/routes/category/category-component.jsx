//Complete - 5/26/25
import { React, useState, useEffect, useMemo, useContext } from "react";
import { useParams } from "react-router-dom";
import ArtPieceItem from "../../components/art-piece/art-piece-item.jsx";
import Panel from "../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "../../routes/category/category-component.module.css";
import { ArtContext } from "../../context.js";
//
export default function Category() {
   // Sets ART to the context-provided array of artwork objects
  const ART = useContext(ArtContext);

  let [showPanel, setShowPanel] = useState(false);
  // 'route' holds URL parameters like: /category/:category
  // e.g., if URL is /category/artist1, then route.category === "artist1"
  const route = useParams();
  // Triggers a remount on route change
  let imageCategoryToShow = route.category;

  
  const [products, setProducts] = useState(() => {
    const storedValue = localStorage.getItem("products");
    // Initialize 'products' from localStorage if available; otherwise, use ART (default)
    // Stored items include star ratings, which can be modified
    return storedValue !== null ? JSON.parse(storedValue) : ART;
  });

  useEffect(() => {
    // If localStorage has been cleared, reset products to ART (default star values)
    if (!localStorage.getItem("products") && ART) {
      setProducts(ART);
    }
  }, [ART]);

  // Memoize filtered artwork list based on selected category
  // Only recalculates if 'products' or 'imageCategoryToShow' changes
  let artPiecesOfCategoryArray = useMemo(() => {
    return products.filter(
        // Create a filtered (non-mutating) array of items matching the current route's category
        // Memoized to recompute only when 'products' or 'imageCategoryToShow' changes
         (element) => element.category === imageCategoryToShow
    );
  }, [products, imageCategoryToShow]);

  // Extract artwork with any non-zero star rating — passed to <Panel />
  let arrayWithStars = products.filter(
    (element) => element.amountStarsNumber !== 0
  );

  const updateStars = (id, amtStars) => {
   // Updates the star rating of a specific artwork
    const updatedArrayOfProducts = products.map((artPiece) => {
      if (artPiece.id !== id) return artPiece; 

       // If current rating equals clicked value, reset to 0 (toggle off)
      const isSame = artPiece.amountStarsNumber === amtStars;
      const newAmountStarsNumber = isSame ? 0 : amtStars;

      // Map numeric star values to corresponding label strings
      const starsLabelMap = {
        0: "none",
        1: "One Check",
        2: "Two Checks",
        3: "Three Checks",
        4: "Four Checks",
      };

      // Return updated artwork object with new star number and label
     
      return {
        // 'artPiece' represents an item in the array; we keep all its properties and update only 'amountStarsNumber' and 'amtstars'
         ...artPiece,
        // Update the numeric star rating
        amountStarsNumber: newAmountStarsNumber,
        // Set the text label that matches the new star rating (e.g., "One Check")
        amtstars: starsLabelMap[newAmountStarsNumber], 
      };
    });

    // Update state with modified product list
    // (State is faster than localStorage but resets on reload)
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
              // Toggle the visibility of the panel
              setShowPanel((showPanel) => !showPanel);
            }}
          >
            {/* Show or hide text based on 'showPanel' state */}
            {showPanel ? "Hide Panel" : "Show Panel"}
          </button>
        </div>

        <div className={styles.ArtworkLink}>
          <a href="/">Home</a>
        </div>

        <div className={styles.UpperGrid}>
         {/* Displays artworks that have been rated (non-zero stars) */}
          {showPanel && <Panel items={arrayWithStars} />}
        </div>

        <div className={styles.GridContainer}>
          <div className={styles.Grid}>
             {/* Display all artworks in the current category (filtered above) */}
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
