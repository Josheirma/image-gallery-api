import { useState, useEffect } from "react";
import { CategoryContainer, ButtonShow, ButtonContainer } from "./category-styles";
import { useParams } from "react-router-dom";
import { NavLink } from "../navigation/navigation-styles";
import { ART } from "../../assets/ART_DATA.js";
import ArtPiece from "../../components/art-piece/art-piece-component.jsx";
import "./category-styles.css";

export default function Category() {
  let artPiecesOfCategoryArray = [];
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
    let Check1, Check2, Check3, Check4;
    let checkString = "!";
    switch (amtountOfChecks) {
      case 1:
        Check1 = true;
        Check2 = false;
        Check3 = false;
        Check4 = false;
        checkString = "One Check";
        break;
      case 2:
        Check1 = true;
        Check2 = false;
        Check3 = false;
        Check4 = false;
        checkString = "Two Checks";
        break;
      case 3:
        Check1 = true;
        Check2 = false;
        Check3 = false;
        Check4 = false;
        checkString = "Three Checks";
        break;
      case 4:
        Check1 = true;
        Check2 = false;
        Check3 = false;
        Check4 = false;
        checkString = "Four Checks";
        break;
      //
      default: //this is unfunctional (there is still always at least one check)
        let arrayWithoutElement = panelInformation.filter(
          (panelElement) => panelElement.id !== product.id
        );
        setPanelInformation(arrayWithoutElement);
        localStorage.setItem(`panel`, JSON.stringify(arrayWithoutElement));
    }
    let objectToPass = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      option1: Check1,
      option2: Check2,
      option3: Check3,
      option4: Check4,
      category: product.category,
      amtstars: checkString,
    };
    createPanelElement(objectToPass);
  };
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

  const createPanelElement = (objectIn) => {
    const {
      id,
      name,
      imageUrl,
      price,
      option1,
      option2,
      option3,
      option4,
      category,
      amtstars,
    } = objectIn;

    //***************NOT UNDERSTANDING THIS!*************
    /*need help with this, I don't understand, why does object have spread when it is one object, and why would there be additional properties    
    
    /* ICC you could refactor this function to accept an object as a parameter and then use the spread operator to copy over the properties of that object to the new object you are creating, and only modify properties that need to be changed like this:
    let panelInformationElementToAdd = {
    ...objectPassedIn, 
    imageUrl: url, 
    options: [
      { option: "option1", checked: option1 },
      { option: "option2", checked: option2 },
      { option: "option3", checked: option3 },
      { option: "option4", checked: option4 },
    ],
    amtstars: amountstars,
  }
    this change removes redundancy and makes the code easier to read and maintain.
  */

    let panelInformationElementToAdd = {
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      options: [
        { option: "option1", checked: option1 },
        { option: "option2", checked: option2 },
        { option: "option3", checked: option3 },
        { option: "option4", checked: option4 },
      ],
      category: category,
      amtstars: amtstars,
    };
    //keeps only element with the id, if this has length of zero, than this element is not in array
    let element = panelInformation.filter(
      (panelElement) => panelElement.id === id
    );
    //there are no matching elements with id, so element is length zero
    //meaning the element doesn't exist yet, so add it to array
    if (element.length === 0) {
      //puts element at end of array and order by index is preserved
      let arrayForPanel = [...panelInformation, panelInformationElementToAdd];
      setPanelInformation(arrayForPanel);
      localStorage.setItem(`panel`, JSON.stringify(arrayForPanel));
    } else {
      ///there is an element with this check, and checks have changed
      let arrayOfIDs = [];
      const panelInformationChanged = panelInformation.map((pan, index) => {
        arrayOfIDs = redistributeTheIds(panelInformation);
        let ID_OfElement = arrayOfIDs[index];
        //This is a used element that is in array of indicies, so let's change it
        //and modify the property!
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

  return (
    <div class="page-container">
      <div class = "artwork-title">Would you like to rate these works?</div>
      
      
      <ButtonContainer >
        <ButtonShow
          onClick={() => {
            setShowPanel((showPanel) => !showPanel);
          }}
          
          >
            {showPanel ? "Hide Panel" : "Show Panel"}
        </ButtonShow>
      </ButtonContainer>


      <div class="artwork-link">
        <NavLink to="/">Home Page</NavLink>
      </div>
      <CategoryContainer>
        {artPiecesOfCategoryArray.map((product) => (
          // Display artwork in this component
          <ArtPiece
            key={product.imageUrl}
            product={product}
            showPanel={showPanel}
            panelInformation={panelInformation}
            products={products}
            setProducts={setProducts}
            updatePanelInfo={updatePanelInfo}
          />
        ))}
      </CategoryContainer>
    </div>
  );
}
