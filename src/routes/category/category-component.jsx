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
  let artPiecesOfCategoryArray = [];
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
  let [panelInformation, setPanelInformation] = useState([]);
  useEffect(() => {}, []);
  let [showPanel, setShowPanel] = useState(false);
  //amount of cjecks is what was selected from that interface
  const setPanelInfo = (amtountOfChecks, product) => {
  if (amtountOfChecks === 1) {
      setPanelElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "One Check"
      );
    } else if (amtountOfChecks === 2) {
      setPanelElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "Two Checks"
      );
    } else if (amtountOfChecks === 3) {
      setPanelElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "Three Checks"
      );
    } else if (amtountOfChecks === 4) {
      setPanelElement(
        product.id,
        product.name,
        product.imageUrl,
        product.price,
        true,
        false,
        false,
        false,
        product.category,
        "Four Checks"
      );
    } else {
      let arrayWithoutElement = panelInformation.filter(
        (panelElement) => panelElement.id !== product.id
      );
      setPanelInformation(arrayWithoutElement);
      localStorage.setItem(`panel`, JSON.stringify(arrayWithoutElement));
    }
  };

  
  //keep art pieces organized using there id for panel
  function redistributeTheIds(id, panelInformation) {
   let arrayOfIDS = [];
    for (let i = 0; i < panelInformation.length; i++) {
      let IDVariable = panelInformation[i].id;
      arrayOfIDS[i] = IDVariable;
    }
    return arrayOfIDS;
  }


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
      ///there is an element with this check, and stars have changed
      let arrayOfIDs = [];
      const panelInformationChanged = panelInformation.map((pan, index) => {
        arrayOfIDs = redistributeTheIds(id, panelInformation);
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

  //makes display ordered by index using elements id
  const advanceToNextID = (productIDToAdvance) => {
    let index = 0
    while (productIDToAdvance !== products[index].id ){
    index++
    }
    return index
  }

  const computeChecks = (e, indexOfCheckBoxes, howManyChecked, product) => {
    let productIndex = advanceToNextID(product.id)
    let infoArray = [...products];
    let amtStars = 0;
    //index of four stars satring at zero
    indexOfCheckBoxes = indexOfCheckBoxes - 1;
    ///product.id = product.id - 1;
    //index is which star, zero through three
    //infoarray was set to products above, in this function
    //how the check boxes work:
    //for any checked box, all boxes before this box will be checked
    //reclicking on a checked box will result in that box and all boxes to the right to be unchecked and the left to be checked.////////
    //check boxes start all false
    //appply to first box
    if (indexOfCheckBoxes === 0) {
      //all check boxes start as false
      //if there is a check on second box and than box one is checked, the check will result in box one being checked
      if (infoArray[productIndex].options[1].checked === true) {
        amtStars = 1;
        setCheckboxes(true, false, false, false, infoArray, productIndex);
      }
      //all check boxes start as false
      //apply check to second box
      //check box one is checked and than index checks one.  so, results in no checks
      else if (infoArray[productIndex].options[0].checked === true) {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, productIndex);
      } else {
        amtStars = 1;
        //all check boxes start as false
        //apply check to second box
        //three falses,  so it will be a simple check on first box
        setCheckboxes(true, false, false, false, infoArray, productIndex);
      }
    }
    //check boxes start all false
    //apply check to second box
    if (indexOfCheckBoxes === 1) {
      if (infoArray[productIndex].options[2].checked === true) {
       // product.id = product.id - 1;
        amtStars = 2;
        //all check boxes start as false
        //if third box is true and box two is than checked there will be two stars
        setCheckboxes(true, true, false, false, infoArray, productIndex);
      }
      //all check boxes start as false
      //if second box is false and box two is than starred, there will be two stars
      else if (infoArray[productIndex].options[1].checked === false) {
        amtStars = 2;
        setCheckboxes(true, true, false, false, infoArray, productIndex);
      }
      //all check boxes start as false
      //isn't checked on third box and is checked on second box (using else)
      //box two is than changed with index that reverts box two to false
      else {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, productIndex);
      }
    }
    //all check boxes start as false
    //apply check to third box
    if (indexOfCheckBoxes === 2) {
      //all check boxes start as false
      //if box four is checked, and three is checked with index, there will be three checks
      if (infoArray[productIndex]
        
        .options[3].checked === true) {
        amtStars = 3;
        setCheckboxes(true, true, true, false, infoArray, productIndex);
      }
      //all check boxes start as false
      //if box three is checked and index is applied with third box, all false
      else if (infoArray[productIndex].options[2].checked === true) {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, productIndex);
      } else {
        //all check boxes start as false
        //by negation of above, fourth star is false, and and third check is false
        //index applied, three trues and a false
        amtStars = 3;
        setCheckboxes(true, true, true, false, infoArray, productIndex);
      }
    }
    //all check boxes start as false
    //apply check to fourth box
    if (indexOfCheckBoxes === 3) {
      //all check boxes start as false
      //index is three so will be all stars, all stars with last element checked with index will be all false
      if (infoArray[productIndex].options[3].checked === true) {
        amtStars = 0;
        setCheckboxes(false, false, false, false, infoArray, productIndex);
      }
      //all check boxes start as false
      //there is a check on fourth box, so is all true.
      else {
        amtStars = 4;
        setCheckboxes(true, true, true, true, infoArray, productIndex);
      }
    }
    setProducts(infoArray);
    setPanelInfo(amtStars, product);
    localStorage.setItem(`products`, JSON.stringify(infoArray));
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
  <ArtPiece key = {product.imageUrl} product = {product} onComplete={onComplete} computeChecks={computeChecks} showPanel={showPanel} panelInformation={panelInformation} setShowPanel = {setShowPanel}   />
  ))}
  </CategoryContainer>
</div>

  )
}
 
