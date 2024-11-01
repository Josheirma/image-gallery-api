import React from "react";
import Panel from "../panel/panel-component";
import "./art-piece-styles.css";

const ArtPiece = ({
  product,
  showPanel,
  panelInformation,
  products,
  setProducts,
  updatePanelInfo,
  artPiecesOfCategoryArray
}) => {
  
  
  const updateStars = (id, amtStars) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if (product.amtstars2 === amtStars) {
          product.amtstars2 = 0;
        } else {
          product.amtstars2 = amtStars;
        }
      }
      return product;
    });
    setProducts(updatedProducts);
    updatePanelInfo(product.amtstars2, product);
    localStorage.setItem(`products`, JSON.stringify(products));
  };
   return (
    <div>
      <>
        <div key={product.imageUrl}>
          <div>
            <h2>{product.name}</h2>
            <h3>${product.price}.00</h3>
            <div>
              <img type="Image" src={product.imageUrl} alt={product.name} />
              <input
                checked={product.amtstars2 >= 1}
                type={`checkbox`}
                onChange={() => updateStars(product.id, 1)}
              />
              <input
                checked={product.amtstars2 >= 2}
                type={`checkbox`}
                onChange={() => updateStars(product.id, 2)}
              />
              <input
                checked={product.amtstars2 >= 3}
                type={`checkbox`}
                onChange={() => updateStars(product.id, 3)}
              />
              <input
                checked={product.amtstars2 >= 4}
                type={`checkbox`}
                onChange={() => updateStars(product.id, 4)}
              />
            </div>
          </div>
          <div>
            {showPanel && (
              <Panel
              artPiecesOfCategoryArray = {artPiecesOfCategoryArray}
              category={panelInformation}

              />
            )}
          </div>
        </div>
      </>
    </div>
  );
};
export default ArtPiece;
