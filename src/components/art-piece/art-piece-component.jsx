        import React from 'react';
        import { useState } from "react";
        import Panel from "../panel/panel-component";
        import {computeChecks} from "../../routes/category/category-component";
        
        
       const ArtPiece = ({product,showPanel,panelInformation, products, setProducts, updatePanelInfo}) => {
        //makes display ordered by index using elements id
        const getIndexfromProductID = (productIDToAdvance, products) => {
          let index = 0
          while (productIDToAdvance !== products[index].id ){
          index++
          }
          return index
        }
        const productIDIndex =  getIndexfromProductID(product.id, products)
        let [indexForChecks, setIndexForChecks] = useState(productIDIndex-1)


        const computeChecks = (howManyChecked, product, products, setProducts, updatePanelInfo) => {
        setIndexForChecks(indexForChecks++)
        let amtStars = 0
        //if(products[indexOfCheckBoxes].amtstars2 === howManyChecked){
        //}
        //else{
          //products[indexOfCheckBoxes].amtstars2 = howManyChecked 
          amtStars = howManyChecked 
        //}
        let copyProducts = [...products]
        copyProducts[indexForChecks].amtstars2 = amtStars
        setProducts(copyProducts);
        updatePanelInfo(product.amtStars, product);
        localStorage.setItem(`products`, JSON.stringify(products));
      }


      let IsCheck1 = false
      let IsCheck2 = false
      let IsCheck3 = false
      let IsCheck4 = false
      if(product.amtstars2 >= 1){
      IsCheck1 = true
      }
      if(product.amtstars2 >= 2){
        IsCheck2 = true
      }
      if(product.amtstars2 >= 3){
        IsCheck3 = true
      }
      if(product.amtstars2 >= 4){
        IsCheck4 = true
      }
       return (
            <div>
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
                              width={200}
                            />
                                <input
                                key={product.imageUrl}
                                checked={IsCheck1}
                                type={`checkbox`}
                               
                                onChange={() =>
                                  computeChecks(1, product, products, setProducts, updatePanelInfo)
                                }
                              />
                              <input
                              checked={IsCheck2}
                              type={`checkbox`}
                              onChange={() =>
                                computeChecks(2, product, products, setProducts, updatePanelInfo)
                              }
                              />
                            <input
                             checked={IsCheck3}
                             type={`checkbox`}
                             onChange={() =>
                               computeChecks(3, product, products, setProducts, updatePanelInfo)
                             }
                             />
                             <input
                             checked={IsCheck4}
                             type={`checkbox`}
                             onChange={() =>
                               computeChecks(4, product, products, setProducts, updatePanelInfo)
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
        }
        export default ArtPiece