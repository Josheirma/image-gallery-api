import { useState, useEffect } from "react";
import { CategoryContainer } from "./category-styles";
import { useParams } from "react-router-dom";
import { after } from "underscore";
import { NavLink } from "../navigation/navigation-styles";
import {ART}  from "../../assets/ART_DATA.js"
import ArtPiece from "../../components/art-piece/art-piece-component.jsx";
import './category-styles.css';


//Two questions for Ingrid:  how would I change directory-component.jsx page to static and how would I change art-piece-component to responsive?

export default function Category() {
  
  let artPiecesOfCategoryArray = []
  let [showPanel, setShowPanel] = useState(false);
  let [panelInformation, setPanelInformation] = useState([]);
  const route = useParams();
  let imageCategoryToShow = route.category;
  let [products, setProducts] = useState(ART);
  artPiecesOfCategoryArray = products.filter(
    (element) => element.category === imageCategoryToShow
  );
  
  useEffect(() => {
   const productsArrayStored = JSON.parse(localStorage.getItem("products"));
    const panelsArrayStored = JSON.parse(localStorage.getItem("panel"));
    if (productsArrayStored) {
      setProducts(productsArrayStored);
    }
    if (panelsArrayStored) {
      setPanelInformation(panelsArrayStored);
    }
  }, []);

  const onComplete = after(products.length, () => {
  });

  
 
  //@@@@@@@@@@@@@@@@@@@
  //use an object to pass into setPanelElement?!?!
 
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
    default:
      let arrayWithoutElement = panelInformation.filter(
        (panelElement) => panelElement.id !== product.id
      );
      setPanelInformation(arrayWithoutElement);
      localStorage.setItem(`panel`, JSON.stringify(arrayWithoutElement));    
  
      
    };

    let objectToPass =  
    [{
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
    }]
      setPanelElement(objectToPass)
    
    

}

  
  //keep art pieces organized using there id for panel
  //@@@@@@@@@@@@@@@@@@@@@
  function redistributeTheIds(panelInformation) {
   let arrayOfIDS = [];
    for (let i = 0; i < panelInformation.length; i++) {
      let IDVariable = panelInformation[i].id;
      arrayOfIDS[i] = IDVariable;
    }
    return arrayOfIDS;
  }

  //@@@@@@@@@@@@pass in an object?
  const setPanelElement = (
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
      const panelInformationChanged = panelInformation.map((pan, index) => {
        arrayOfIDs = redistributeTheIds(panelInformation);
        let indexOfElement = arrayOfIDs[index];
        if (indexOfElement === id) {
          return panelInformationElementToAdd;
        } else {
          return pan;
        }
      });
      setPanelInformation(panelInformationChanged);
      localStorage.setItem(`panel`, JSON.stringify(panelInformationChanged));
    }
  };

  //Sets one element of another array with checks
  const setCheckboxes = (check1, check2, check3, check4, infoArray, id) => {
    infoArray[id].options[0].checked = check1;
    infoArray[id].options[1].checked = check2;
    infoArray[id].options[2].checked = check3;
    infoArray[id].options[3].checked = check4;
    return infoArray;
  };

  
 
  
  return(
   
  <div>
    <div className = "artwork-title">
    Would you like to rate these works?
    </div>
    <div  className="buttonShow">
    <button
      
      onClick={() => {
        //
        setShowPanel((showPanel) => !showPanel);
      }}
    >
      Show Panel
    </button>
    </div>
    <div className = "artwork-link">
    <NavLink to="/">Home Page</NavLink>
    </div>
  <CategoryContainer>
  {artPiecesOfCategoryArray.map((product) => (
  // Display artwork in this mapped component
  <ArtPiece key = {product.imageUrl} product = {product} onComplete={onComplete} amountOfStars={product.amountstars} showPanel={showPanel} panelInformation={panelInformation} setShowPanel = {setShowPanel}  products={products} setProducts =  {setProducts} updatePanelInfo = {updatePanelInfo}   />
  ))}
  </CategoryContainer>
</div>

  )


}


//github, artpeice wrong params, set index and index, 245, trace starin g right above - console.log - 3 spots - save


