export const makeCopyOfProductsWithCustomData = (arrayOfProducts, category) => {
    console.log("was in function: ", arrayOfProducts);
   
    let index = 0;
    if (arrayOfProducts) {
      if (arrayOfProducts.length > 0) {
        return arrayOfProducts.map((prod) => {
          index++;
          return {
            ...prod,
            index,
            category: prod.category || category, // Adding the category as a backup property in our custom objects
            options: prod.options || [
              { option: `option1`, checked: false },
              { option: `option2`, checked: false },
              { option: `option3`, checked: false },
              { option: `option4`, checked: false },
            ],
          };
        });
      } else {
        return arrayOfProducts;
      }
    } else {
      return arrayOfProducts;
    }
  };


  
  