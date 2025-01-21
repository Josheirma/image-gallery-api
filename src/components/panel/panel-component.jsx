import { DropDown } from "./panel-styles";
import './panel-styles.css'
import React, { useState, useEffect} from "react";

const Panel = ({items, theWidth}) => {
  
  console.log("the Width: ", theWidth)
  const [height, setHeight] = useState(window.innerHeight * 0.27); // Start with 50% of window height
  let amountOfStars = ""
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [width, setWidth] = useState(window.innerWidth)
  

  useEffect(() => {
    const handleResize2 = () => {
      //if(window.innerWidth < 882){
        setWidth(200);
      //}
      
    };

    handleResize2()
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize2);
  
    // Cleanup the event listener on component unmount
    return () => 
      window.removeEventListener('resize', handleResize2);
    
  }, []);

  
  
  useEffect(() => {
    const handleResize = () => {
      setHeight(230); // Adjust to 50% of the new window height
    };

    handleResize()
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
/////

  // Function to check window size and update the variable
function checkWindowSize() {
  let targetWidth = 997; // Replace with your desired width
  if (window.innerWidth <= targetWidth) {
    setHeight(900) ;
    
  } else {
      
      
  }
}
/////


/////
  return (
    
    <DropDown   style = {{ width: width, height: `${height}px`,}} >
    <div >
    {items && items.map((item) => (
    <div key = {item.id} >
    <p>{item.name}</p>
    <img className = "panelimage" src={item.imageUrl} alt = {`Panel Image`} />
    <p>${item.price}.00</p>
    <p>{item.amtstars}</p> 
    <p>----</p>
    </div>
    ))}
    </div>
       </DropDown>
    );
  }

export default Panel;
