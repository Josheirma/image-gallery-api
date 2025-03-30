//import "./art-piece-styles.css";
import {useEffect, useLayoutEffect , useRef, useState}from 'react';
//import styles from "./art-piece-styles.module.css";
//import './CategoryContainer.css'; // Assuming the CSS for the grid layout.
//import "../../global.css"
import styles from "../../script.module.css";



const ArtPieceItem = ({onWidthChanged, item, updateStars}) => {
//const ArtPieceItem = React.forwardRef(({ item, updateStars }, ref)) => {
  //const ArtPieceItem = React.forwardRef((props, ref) => {
  //  const { item, updateStars } = props;
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  const sendWidth = (msg) => {
  //const msg = "a"
  onWidthChanged(msg);
  }
 
  useLayoutEffect(() => {
    console.log("1")
    sendWidth(divRef.current.offsetWidth);
  });


  useEffect(() => {
  //sendWidth()
  console.log("here")
  // Attach the event listener
  window.addEventListener("resize", sendWidth);

  // Cleanup: Remove the event listener on component unmount
  return () => {
    window.removeEventListener("resize", sendWidth);
  };

  }, []);

  return(
    <div className = {styles.ComponentArtpiece}>
    
    <div ref={divRef}  key={item.imageUrl}>
    <div>
      <div className = {styles.ImageHeading}> {item.name}</div> 
     
        <div className = "image-holder" >
        <img className = {styles.Image} type="Image" src={item.imageUrl} alt = "Image of Art"   />
        </div>
        
        <div className = {styles.InputContainer}>
        <input
          checked={item.amountStarsNumber >= 1}
          type={`checkbox`}
          onChange={() => 
            updateStars(item.id, 1)
             }
          />
        <input
          checked={item.amountStarsNumber >= 2}
          type={`checkbox`}
          onChange={() => 
            updateStars(item.id, 2)
          }
        />
        <input
          checked={item.amountStarsNumber >= 3}
          type={`checkbox`}
          onChange={() => 
            
            updateStars(item.id, 3)}
        />
        <input
          checked={item.amountStarsNumber >= 4}
          type={`checkbox`}
          onChange={() => 
          
          updateStars(item.id, 4)}
        />
      </div>
    </div>
    
      
    
       </div>
       </div>
  )

  
}

export default ArtPieceItem;