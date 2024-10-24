        import React from 'react';
        import { useState } from "react";
        import Panel from "../panel/panel-component";
        import {computeChecks} from "../../routes/category/category-component";
        
        
       const ArtPiece = ({product,onComplete,amountStars,showPanel,panelInformation, setShowPanel, products, setProducts, updatePanelInfo}) => {
        let [index, setIndex] = useState(0)
        
        //makes display ordered by index using elements id
        const getIndexfromProductID = (productIDToAdvance, products) => {
          let index = 0
          while (productIDToAdvance !== products[index].id ){
          index++
          }
          return index
        }


        const computeChecks = (indexOfCheckBoxes, howManyChecked, product, products, setProducts, updatePanelInfo, Index) => {
        setIndex(2)
        let amtStars = 0
        //if(products[indexOfCheckBoxes].amtstars2 === howManyChecked){
          
        //}
        //else{
          //products[indexOfCheckBoxes].amtstars2 = howManyChecked 
          amtStars = howManyChecked 
        //}
      
        
        let copyProducts = [...products]
        let indexForID = getIndexfromProductID(2, products) 
        copyProducts[indexForID].amtstars2 = amtStars
        //let productObject = [product, amtStars]
      
        setProducts(copyProducts);
        updatePanelInfo(product.amtStars, product);
        localStorage.setItem(`products`, JSON.stringify(products));
      }
       


        //index1++
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
                              onLoad={onComplete}
                              onError={onComplete}
                              alt={product.name}
                              width={200}
                            />
                          </div>
                        </div>
                        <div>

                          {}
                         
                          {product.options.map((opt, optIndex) => {
                            
                            let newOptIndex = optIndex + 1;
                            let ISStar = false
                            if(product.amtstars2 <= index){
                              ISStar = true
                              //index1++
                            }else{
                              ISStar = false
                            }
                            return (
                              <input
                                key={optIndex}
                                checked={ISStar}
                                type={`checkbox`}
                                name={newOptIndex}
                                onChange={() =>
                                  computeChecks(newOptIndex, newOptIndex, product, products, setProducts, updatePanelInfo, index)
                                }
                              />
                            );
                          })}
                          {showPanel && (
                            <Panel
                              key={panelInformation.id}
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