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
  const ART = useContext(ArtContext);

  let [showPanel, setShowPanel] = useState(false);
  const route = useParams();
  let imageCategoryToShow = route.category;

  const [products, setProducts] = useState(() => {
    const storedValue = localStorage.getItem("products");
    return storedValue !== null ? JSON.parse(storedValue) : ART;
  });

  useEffect(() => {
    if (!localStorage.getItem("products") && ART) {
      setProducts(ART);
    }
  }, [ART]);

  //MEMOIZE  - only if products or imageCategoryToShow changes
  let artPiecesOfCategoryArray = useMemo(() => {
    return products.filter(
      (element) => element.category === imageCategoryToShow
    );
  }, [products, imageCategoryToShow]);

  let arrayWithStars = products.filter(
    (element) => element.amountStarsNumber !== 0
  );

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
        4: "Four Checks",
      };

      // Return a new object (avoid mutation)
      return {
        ...artPiece,
        amountStarsNumber: newAmountStarsNumber,
        amtstars: starsLabelMap[newAmountStarsNumber], // Update amtstars
      };
    });

    // Update state with the new array
    setProducts(updatedArrayOfProducts);

    // Optionally update localStorage
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
            {showPanel ? "Hide Panel" : "Show Panel"}
          </button>
        </div>

        <div className={styles.ArtworkLink}>
          <a href="/">Home</a>
        </div>

        <div className={styles.UpperGrid}>
          {showPanel && <Panel items={arrayWithStars} />}
        </div>

        <div className={styles.GridContainer}>
          <div className={styles.Grid}>
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
