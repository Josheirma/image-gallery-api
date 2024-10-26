import React from "react";
import { useState } from "react";
import Panel from "../panel/panel-component";
import { computeChecks } from "../../routes/category/category-component";
import "./art-piece-styles.css";

const ArtPiece = ({
  product,
  showPanel,
  panelInformation,
  products,
  setProducts,
  updatePanelInfo,
}) => {
  //makes display ordered by index using elements id

  //@@@@@@@@@@@@@not needed because of computeschecks?4
  const getIndexfromProductID = (productIDToAdvance, products) => {
    let index = 0;
    while (productIDToAdvance !== products[index].id) {
      index++;
    }
    return index;
  };
  const productIDIndex = getIndexfromProductID(product.id, products);
  //each call starts with the proper index that is save in this useState
  let [indexForChecks, setIndexForChecks] = useState(productIDIndex);

  const updateStars = (id, amtStars) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if(product.amtstars2 == amtStars){
          product.amtsras2 = 0
        }else{
          product.amtstars2 = amtStars;
        }
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const computeChecks = (
    howManyChecked,
    product,
    products,
    setProducts,
    updatePanelInfo
  ) => {
    //the index is saved
    setIndexForChecks(indexForChecks);
    let amtStars = 0;
    //this is for causing same checkbox clicked to set to no checks
    //if(products[indexOfCheckBoxes].amtstars2 === howManyChecked){
    //}
    //else{
    //products[indexOfCheckBoxes].amtstars2 = howManyChecked
    amtStars = howManyChecked;
    //}
    //makes a copy so state can be set
    let copyProducts = [...products];
    //sets amount of stars from check box cklick
    copyProducts[indexForChecks].amtstars2 = amtStars;
    //sets new copy with new amount of stars
    setProducts(copyProducts);
    //this makes panel info and it calls create it
    updatePanelInfo(product.amtstars2, product);
    localStorage.setItem(`products`, JSON.stringify(products));
  };

  //sets variables to flag for selecting checks
  let IsCheck1 = false;
  let IsCheck2 = false;
  let IsCheck3 = false;
  let IsCheck4 = false;
  if (product.amtstars2 >= 1) {
    IsCheck1 = true;
  }
  if (product.amtstars2 >= 2) {
    IsCheck2 = true;
  }
  if (product.amtstars2 >= 3) {
    IsCheck3 = true;
  }
  if (product.amtstars2 >= 4) {
    IsCheck4 = true;
  }
  return (
    <div class="wholeScreen">
      <>
        <div key={product.imageUrl}>
          <div>
            <h2>{product.name}</h2>
            <h3>${product.price}.00</h3>
            <div>
              <img
                type="Image"
                src={product.imageUrl}
                //onLoad={onComplete}
                //onError={onComplete}
                alt={product.name}
              />
              <input
                key={product.imageUrl}
                checked={product.amtstars2 >= 1}
                type={`checkbox`}
                onChange={() =>
                  updateStars (product.id, 1 )
                  // computeChecks(
                  //   1,
                  //   product,
                  //   products,
                  //   setProducts,
                  //   updatePanelInfo
                  // )
                }
              />
              <input
                checked={product.amtstars2 >= 2}
                type={`checkbox`}
                onChange={() =>
                  computeChecks(
                    2,
                    product,
                    products,
                    setProducts,
                    updatePanelInfo
                  )
                }
              />
              <input
                checked={product.amtstars2 >= 3}
                type={`checkbox`}
                onChange={() =>
                  computeChecks(
                    3,
                    product,
                    products,
                    setProducts,
                    updatePanelInfo
                  )
                }
              />
              <input
                checked={product.amtstars2 >= 4}
                type={`checkbox`}
                onChange={() =>
                  computeChecks(
                    4,
                    product,
                    products,
                    setProducts,
                    updatePanelInfo
                  )
                }
              />
            </div>
          </div>
          <div>
            {showPanel && (
              <Panel
                //key={panelInformation.id}
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
