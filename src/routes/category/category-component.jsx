import { useState, useEffect } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams } from "react-router-dom";
//import { after } from "underscore";
import { NavLink } from "../navigation/navigation-styles";
import {ART}  from "../../assets/ART_DATA.js"
import ArtPiece from "../../components/art-piece/art-piece-component.jsx";
import './category-styles.css';

//6
//@@@@@Two questions for Ingrid:  how would I change directory-component.jsx page so that the images reside off the page instaed of another row
//css : 
//@@@@and how would I change art-piece-component to continue on the next rows when browser reduces - its a grid

//10 - look over rest again!!
//9
//@@@@@@@@ catagory- min width for categories
//5
//@@@@@@@@@ after that major javascript revision, what else is important
//optional chaning, destructure nullish coalesceing operator (??)
//most major additions afte es6
//@@@@@@@@  are most sites non-respondive because phones great resolution
//(smaller browser size cuts off excess page) insted of force componnet to next row
//7
//@@@@@@ how is horizontal scrollbar implemented for smaller page, is it ever automatic, especially on smart phones

export default function Category() {
  
  let artPiecesOfCategoryArray = []
  let [showPanel, setShowPanel] = useState(false);
  let [panelInformation, setPanelInformation] = useState([]);
  const route = useParams();
  let imageCategoryToShow = route.category;
  //sets products to art, amountstars2 is zero, and string is none
  let [products, setProducts] = useState(ART);
  //this is an array of products with the catefory from artists directory
  //passed using routes and links
  artPiecesOfCategoryArray = products.filter(
    (element) => element.category === imageCategoryToShow
  );
  
  useEffect(() => {
    // get any products in locals torage for both products and panel - just on first render
   const productsArrayStored = JSON.parse(localStorage.getItem("products"));
    const panelsArrayStored = JSON.parse(localStorage.getItem("panel"));
    //if in local storage, set to products and panel
    if (productsArrayStored) {
      setProducts(productsArrayStored);
    }
    if (panelsArrayStored) {
      //same shape as products is stored to panel
      setPanelInformation(panelsArrayStored);
    }
  }, []);

  //const onComplete = after(products.length, () => {
  //});


  
 //get data for createpanelelement
  const updatePanelInfo = (amtountOfChecks, product) => {

    let Check1, Check2, Check3, Check4 
    let checkString = "!" 
    switch(amtountOfChecks){
    case 1:
        Check1 = true
        Check2 = false
        Check3 = false
        Check4 = false
        checkString = "One Check"
      break
    case 2:
        Check1 = true
        Check2 = false
        Check3 = false
        Check4 = false
        checkString = "Two Checks"
      break
    case 3:
        Check1 = true
        Check2 = false
        Check3 = false
        Check4 = false
        checkString = "Three Checks"
      break
    case 4: 
        Check1 = true
        Check2 = false
        Check3 = false
        Check4 = false
        checkString = "Four Checks"
    break
    //
    default://this is unfunctional (there is still always at least one check)
      let arrayWithoutElement = panelInformation.filter(
        (panelElement) => panelElement.id !== product.id
      );
      setPanelInformation(arrayWithoutElement);
      localStorage.setItem(`panel`, JSON.stringify(arrayWithoutElement));    
  
      
    };
    //to use with Ingrid
    let objectToPass =  
    {
      id:product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      option1: Check1,
      option2: Check2,
      option3: Check3,
      option4: Check4,
      category: product.category,
      amtstars: checkString,
    }
      //createPanelElement(objectToPass)
      //2
      //@@@@@@@@@@@@@@@@@not passing an object yet, as Ingrid recommended
      //quick fix
      createPanelElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        Check1,
        Check2,
        Check3,
        Check4,
        product.category,
        checkString)

      
    
    

}

  
  //keep art pieces organized using there id for panel
  //// ICC I'd want to investigate the purpose and need for this function if some of my suggestion about refactoring the way to do checkmarks in the computeChecks function were implemented. This may not be needed.
  //3
  //@@@@@@@@@@@@@@@@@@@@@
  //makes an array in order of indices of ids
  function redistributeTheIds(panelInformation) {
   let arrayOfIDS = [];
    for (let i = 0; i < panelInformation.length; i++) {
      let IDVariable = panelInformation[i].id;
      arrayOfIDS[i] = IDVariable;
    }
    return arrayOfIDS;
  }

  //1
  //@@@@@@@@@@@@pass in an object? - see updatepanel, above
  //this shape of the parameter would be this: {id, name, url, price, option1, option2, option3, option4, category, amountstars} - WHAT, USE DOT NOTATION WITH OBJECT
  //OR DECLARE THE VARIABLES AT BEGINNING destructuring
  const createPanelElement = (
    id,
    name,
    url,
    price,
    option1,
    option2,
    option3,
    option4,
    category,
    amountstars
  ) => {
    let panelInformationElementToAdd = {
      id: id,
      name: name,
      imageUrl: url,
      price: price,
      options: [
        { option: "option1", checked: option1 },
        { option: "option2", checked: option2 },
        { option: "option3", checked: option3 },
        { option: "option4", checked: option4 },
      ],
      category: category,
      amtstars: amountstars,
    };
    //if this panel element is already part of the panel then remove itt
    let panelInformation2 = panelInformation.filter(
      (panelElement) => panelElement.id === id
    );
    //there are no elements in array for panel with this new info
    if (panelInformation2.length === 0) {
      let arrayFOrPanel = [...panelInformation, panelInformationElementToAdd];
      setPanelInformation(arrayFOrPanel);
      localStorage.setItem(`panel`, JSON.stringify(arrayFOrPanel));
    } else {
      ///there is an element with this check, and checks have changed
      let arrayOfIDs = [];
      //checks the array of ordered ids, if it is equal to the newest id (last in array)
      //then put this object into panelinformationchanged
      //otherwise, just put older objects in ordeer
      const panelInformationChanged = panelInformation.map((pan, index) => {
        arrayOfIDs = redistributeTheIds(panelInformation);
        let ID_OfElement = arrayOfIDs[index];
        if (ID_OfElement === id) {
          return panelInformationElementToAdd;
        } else {
          return pan;
        }
      });
      setPanelInformation(panelInformationChanged);
      localStorage.setItem(`panel`, JSON.stringify(panelInformationChanged));
    }
  };

  return(
   
  <div className = "page-container">
    <div className = "artwork-title">
    Would you like to rate these works?
    </div>
    <div  className="buttonShow">
    <button onClick={() => {setShowPanel((showPanel) => !showPanel);}}>
    {showPanel? 'Hide Panel' : 'Show Panel' }
    </button>
    </div>
    <div className = "artwork-link">
    <NavLink to="/">Home Page</NavLink>
    </div>
  <CategoryContainer>
  {artPiecesOfCategoryArray.map((product) => (
  // Display artwork in this mapped component
  <ArtPiece key = {product.imageUrl} product = {product} showPanel={showPanel} panelInformation={panelInformation}  products={products} setProducts =  {setProducts} updatePanelInfo = {updatePanelInfo}   />
  ))}
  </CategoryContainer>
</div>

  )
}

